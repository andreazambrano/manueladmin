import { Component, OnInit } from '@angular/core';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-emailcompose',
  templateUrl: './emailcompose.component.html',
  styleUrls: ['./emailcompose.component.scss']
})

/**
 * Email-compose component - handling email-compose with sidebar and content
 */
export class EmailcomposeComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  // editor
  public Editor = ClassicEditor;
  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Apps', path: '/' }, { label: 'Email', path: '/' }, { label: 'Compose Email', active: true }];
  }
}
