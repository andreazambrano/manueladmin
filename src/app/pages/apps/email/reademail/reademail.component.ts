import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-reademail',
  templateUrl: './reademail.component.html',
  styleUrls: ['./reademail.component.scss']
})

/**
 * Read-email component - handling read-email with sidebar and content
 */
export class ReademailComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  // editor
  public Editor = ClassicEditor;

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Apps', path: '/' }, { label: 'Email', path: '/' }, { label: 'Email Detail', active: true }];
  }
}
