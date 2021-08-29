import { Component, OnInit } from '@angular/core';

import { EventService } from '../../../core/services/event.service';

@Component({
  selector: 'app-rightsidebar',
  templateUrl: './rightsidebar.component.html',
  styleUrls: ['./rightsidebar.component.scss']
})
export class RightsidebarComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  /**
   * Change the layout onclick
   * @param layout Change the layout
   */
  changeLayout(layout: string) {
    this.eventService.broadcast('changeLeftSidebarType', 'default');
    this.eventService.broadcast('changeLeftSidebarTheme', 'default');
    this.eventService.broadcast('changeLayoutWidth', 'default');
    this.eventService.broadcast('changeLayout', layout);
    this.hide();
  }

  /**
   * Change the left-sidebar theme
   * @param theme Change the theme
   */
  changeLeftSidebarTheme(theme: string) {
    this.eventService.broadcast('changeLayout', 'vertical');
    this.eventService.broadcast('changeLeftSidebarTheme', theme);
    this.eventService.broadcast('changeLeftSidebarType', 'default');
    this.hide();
  }

  /**
   * Change the layout
   * @param type Change the layout type
   */
  changeLeftSidebarType(type: string) {
    this.eventService.broadcast('changeLayout', 'vertical');
    this.eventService.broadcast('changeLeftSidebarType', type);
    this.hide();
  }

  /**
   * Change the layout width
   * @param width string 
   */
  changeLayoutWidth(width: string) {
    this.eventService.broadcast('changeLayoutWidth', width);
    this.hide();
  }


  /**
   * Hide the sidebar
   */
  public hide() {
    document.body.classList.remove('right-bar-enabled');
  }
}
