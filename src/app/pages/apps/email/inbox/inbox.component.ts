import { Component, OnInit } from '@angular/core';

import { Email } from './inbox.model';

import { emailData } from './data';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})

/**
 * Inbox component - handling inbox with sidebar and content
 */
export class InboxComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  unreadEmail: Email[];
  importantEmail: Email[];
  elseEmail: Email[];

  isChatVisible: boolean;

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Apps', path: '/' }, { label: 'Email', path: '/' }, { label: 'Inbox', active: true }];

    this._fetchData();
    this.isChatVisible = true;

  }

  /**
   * Shows chat window
   */
  showChatWindow() {
    this.isChatVisible = true;
  }

  /**
   * Removes self from dom
   */
  hideChatWindow() {
    this.isChatVisible = false;
  }

  /**
   * Fetches the email data
   */
  private _fetchData() {
    this.unreadEmail = emailData.filter(t => t.status === 'unread');
    this.importantEmail = emailData.filter(t => t.status === 'important');
    this.elseEmail = emailData.filter(t => t.status === 'else');
  }
}
