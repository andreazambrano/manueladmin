import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { chatData } from './data';

import { Chat } from './chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(public formBuilder: FormBuilder) { }

  chatData: Chat[];
  formData: FormGroup;

  // Form submit
  chatSubmit: boolean;

  @Input() maxHeight: string;

  ngOnInit() {

    /**
     * Input Chat Validation
     */
    this.formData = this.formBuilder.group({
      message: ['', [Validators.required]],
    });

    this._fetchData();
  }

  /**
   * Returns form
   */
  get form() {
    return this.formData.controls;
  }

  /**
   * Save the message in chat
   */
  messageSave() {
    if (this.formData.valid) {
      const message = this.formData.get('message').value;
      const currentDate = new Date();

      // Message Push in Chat
      this.chatData.push({
        name: 'Shreyu',
        image: 'assets/images/users/avatar-7.jpg',
        message,
        time: currentDate.getHours() + ':' + currentDate.getMinutes()
      });

      // Set Form Data Reset
      this.formData = this.formBuilder.group({
        message: ''
      });
    }

    this.chatSubmit = true;
  }

  private _fetchData() {
    this.chatData = chatData;
  }
}
