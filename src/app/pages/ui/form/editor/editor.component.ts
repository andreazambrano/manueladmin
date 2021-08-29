import { Component, OnInit } from '@angular/core';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Editor
  public editor = ClassicEditor;

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Forms', path: '/' }, { label: 'Editor', path: '/', active: true }];
  }

}
