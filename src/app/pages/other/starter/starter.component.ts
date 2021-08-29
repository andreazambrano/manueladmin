import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})

/**
 * Starter-component
 */
export class StarterComponent implements OnInit {

   // bread crumb items
   breadCrumbItems: Array<{}>;

   constructor() { }

   ngOnInit() {
     this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Pages', path: '/' }, { label: 'Starter', active: true }];
   }
}
