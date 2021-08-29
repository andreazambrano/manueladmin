import { Component, OnInit } from '@angular/core';

import { List, Label } from './list.model';

import { emailList, emailLabel } from './data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  // Email left sidebar data
  emailList: List[];
  emailLabel: Label[];

  constructor() { }

  ngOnInit() {
    /**
     * Fetches data
     */
    this._fetchData();
  }

  /**
   * fetches the list and label value
   */
  private _fetchData() {

    // leftbar list
    this.emailList = emailList;
    // leftbar label
    this.emailLabel = emailLabel;
  }
}
