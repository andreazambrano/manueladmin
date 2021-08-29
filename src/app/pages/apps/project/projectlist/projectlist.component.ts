import { Component, OnInit } from '@angular/core';

import { projectData } from './data';

import { List } from './projectlist.model';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.scss']
})

/**
 * Project-list component - handling project-list with sidebar and content
 */
export class ProjectlistComponent implements OnInit {

  projectData: List[];

  constructor() { }

  ngOnInit() {
    this._fetchData();
  }

  /**
   * Fetches the Projects data
   */
  private _fetchData() {
    this.projectData = projectData;
  }
}
