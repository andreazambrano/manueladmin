import { Component, OnInit } from '@angular/core';

import { projectActivity, widgetData } from './data';

import { Activity, Widget } from './projectdetai.model';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.scss']
})

/**
 * Project-detail component - handling project-detail with sidebar and content
 */
export class ProjectdetailComponent implements OnInit {

  constructor() { }

  projectActivity: Activity[];
  widgetData: Widget[];

  ngOnInit() {
    /**
     * Fetches the project data
     */
    this._fetchData();
  }

  private _fetchData() {
    this.projectActivity = projectActivity;
    this.widgetData = widgetData;
  }
}
