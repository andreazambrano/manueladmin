import { Component, OnInit } from '@angular/core';

import { messageData, activities, tasks, projectData } from './data';

import { Message, Activity, Tasks, List } from './profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
/**
 * Profile-component - handling profile with sidenav-content
 */
export class ProfileComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  messageData: Message[];
  activities: Activity[];
  tasks: Tasks[];
  projectData: List[];

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Pages', path: '/' }, { label: 'Profile', active: true }];

    this._fetchData();
  }

  /**
   * Fetches the data
   */
  private _fetchData() {
    this.messageData = messageData;
    this.activities = activities;
    this.tasks = tasks;
    this.projectData = projectData;
  }
}
