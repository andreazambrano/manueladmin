import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unicons',
  templateUrl: './unicons.component.html',
  styleUrls: ['./unicons.component.scss']
})

/**
 * Unicons component - handling the Unicons-icon with sidebar and content
 */
export class UniconsComponent implements OnInit {

   // bread crumb items
   breadCrumbItems: Array<{}>;

   constructor() { }

   ngOnInit() {
     this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Icons', path: '/' }, { label: 'Unicons', active: true }];
   }
}
