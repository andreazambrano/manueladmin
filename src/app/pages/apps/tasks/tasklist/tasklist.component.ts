import { Component, OnInit } from '@angular/core';

import { tasks } from './data';

import { Tasks } from './tasklist.model';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})

/**
 * Task-list component - handling task-list with sidebar and content
 */
export class TasklistComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  todayTask: boolean;
  upcomingTasks: boolean;
  otherTasks: boolean;

  todayTasks: Tasks[];
  upcomingTask: Tasks[];
  otherTask: Tasks[];

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Apps', path: '/' }, { label: 'Tasks', path: '/' }, { label: 'List', active: true }];

    this.todayTask = false;
    this.upcomingTasks = false;
    this.otherTasks = false;

    /**
     * Fetches the task data
     */
    this._fetchData();
  }

  /**
   * Fetches and filter the data
   */
  private _fetchData() {
    this.todayTasks = tasks.filter(t => t.id === 'today');
    this.upcomingTask = tasks.filter(t => t.id === 'upcoming');
    this.otherTask = tasks.filter(t => t.id === 'other');
  }
}
