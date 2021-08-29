import { Component, OnInit, AfterViewInit, Input, OnChanges } from '@angular/core';

import { EventService } from '../../core/services/event.service';

@Component({
  selector: 'app-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss']
})

/**
 * Horizontal-component - handling horizontal-layout with navbar and content
 */
export class HorizontalComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() layoutWidth: string;

  public isCollapsed = false;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    document.body.classList.remove('boxed-layout');
    document.body.classList.remove('left-side-menu-condensed');
    document.body.classList.remove('left-side-menu-dark');
  }

  ngOnChanges() {
    // if (this.isBoxed) {
    //   alert('hi');
    //   document.body.setAttribute('data-layout-mode', 'boxed');
    // } else {
    //   document.body.removeAttribute('data-layout-mode');
    // }
  }

  ngAfterViewInit() {
    document.body.setAttribute('data-layout', 'topnav');

    if (!this.isMobile()) {
      document.body.classList.add('sidebar-enable');
    }
  }

  isMobile() {
    const ua = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua);
  }
  /**
   * on settings button clicked from topbar
   */
  onSettingsButtonClicked() {
    document.body.classList.toggle('right-bar-enabled');
  }

  /**
   * On mobile toggle button clicked
   */
  onToggleMobileMenu() {
    this.isCollapsed = !this.isCollapsed;

    if (!this.isMobile()) {
      document.body.classList.toggle('enlarged');
    }
  }
}
