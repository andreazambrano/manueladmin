import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feather',
  templateUrl: './feather.component.html',
  styleUrls: ['./feather.component.scss']
})

/**
 * Feather component - handling the feather-icon with sidebar and content
 */
export class FeatherComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Icons', path: '/' }, { label: 'Feather Icons', active: true }];
  }
}
