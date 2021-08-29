import { Component, OnInit } from '@angular/core';

import { DndDropEvent } from 'ngx-drag-drop';

import { Task } from './board.model';

import { tasks } from './data';

@Component({
  selector: 'app-kanbanboard',
  templateUrl: './kanbanboard.component.html',
  styleUrls: ['./kanbanboard.component.scss']
})

/**
 * Kanbanboard component - handling task-board with sidebar and content
 */
export class KanbanboardComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Task data
  todoTasks: Task[];
  inprogressTasks: Task[];
  reviewTasks: Task[];
  doneTasks: Task[];

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Apps', path: '/' }, { label: 'Tasks', path: '/' }, { label: 'Tasks Board', active: true }];

    /**
     * Fetches Data
     */
    this._fetchData();
  }
  /**
   * On task drop event
   */
  onDrop(event: DndDropEvent, filteredList?: any[], targetStatus?: string) {
    if (filteredList && event.dropEffect === 'move') {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = filteredList.length;
      }

      filteredList.splice(index, 0, event.data);
    }
  }

  /**
   * on dragging task
   * @param item item dragged
   * @param list list from item dragged
   */
  onDragged(item: any, list: any[]) {
    const index = list.indexOf(item);
    list.splice(index, 1);
  }

  /**
   * Fetches the value of kanbanboard data
   */
  private _fetchData() {
    // all tasks
    this.todoTasks = tasks.filter(t => t.status === 'todo');
    this.inprogressTasks = tasks.filter(t => t.status === 'inprogress');
    this.reviewTasks = tasks.filter(t => t.status === 'review');
    this.doneTasks = tasks.filter(t => t.status === 'done');
  }
}
