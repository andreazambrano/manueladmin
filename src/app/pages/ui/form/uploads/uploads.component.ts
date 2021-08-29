import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.scss']
})
export class UploadsComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  config: {};

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Forms', path: '/' }, { label: 'File Upload', path: '/', active: true }];

    this.config = {
      // Change this to your upload POST address:
       url: 'https://httpbin.org/post',
       maxFilesize: 50,
       acceptedFiles: 'image/*'
     };
  }

  /**
   * On upload error
   * @param $event
   */
  onUploadError($event: any) {
    console.log($event);
  }

  /**
   * on upload success
   * @param $event
   */
  onUploadSuccess($event: any) {
    console.log($event);
  }
}
