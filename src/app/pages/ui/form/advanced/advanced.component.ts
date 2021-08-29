import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss']
})
/**
 * Form-advanced componenet - handling form-advanced with sidebar and content
 */
export class AdvancedComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  color: string;
  defaultColor: string;
  componentcolor: string;
  inlineColor: string;

  // Select2 Dropdown
  selectValue: string[];

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Forms', path: '/' }, { label: 'Advanced', path: '/', active: true }];

    // Select dropdown value
    // tslint:disable-next-line: max-line-length
    this.selectValue = ['Alaska', 'Hawaii', 'California', 'Nevada', 'Oregon', 'Washington', 'Arizona', 'Colorado', 'Idaho', 'Montana', 'Nebraska', 'New Mexico', 'North Dakota', 'Utah', 'Wyoming', 'Alabama', 'Arkansas', 'Illinois', 'Iowa'];
  }

}
