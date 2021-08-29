import { Component, OnInit, AfterViewInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import {
  LAYOUT_WIDTH_FLUID, SIDEBAR_THEME_DEFAULT, SIDEBAR_THEME_DARK, SIDEBAR_WIDTH_CONDENSED, LAYOUT_WIDTH_BOXED
} from '../layout.model';

@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.scss']
})
export class VerticalComponent implements OnInit, AfterViewInit, OnChanges {

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        document.body.classList.remove('sidebar-enable');
      }
    });
  }

  @Input() sidebarTheme: string;
  @Input() sidebarType: string;
  @Input() layoutWidth: string;

  ngOnInit() {
    this.sidebarTheme = SIDEBAR_THEME_DEFAULT;
    this.layoutWidth = LAYOUT_WIDTH_FLUID;
    this.sidebarType = 'default';
  }

  ngOnChanges(changes: SimpleChanges) {

    const layoutWidth: SimpleChange = changes.layoutWidth;
    const sidebarTheme: SimpleChange = changes.sidebarTheme;
    const sidebarType: SimpleChange = changes.sidebarType;

    // layout width
    if (layoutWidth && layoutWidth.currentValue !== layoutWidth.previousValue) {
      switch (this.layoutWidth) {
        case LAYOUT_WIDTH_BOXED:
          document.body.classList.add('left-side-menu-condensed');
          document.body.classList.add('boxed-layout');
          break;
        default:
          document.body.classList.remove('boxed-layout');
          document.body.classList.remove('left-side-menu-condensed');
          break;
      }
    }

    // sidebar theme
    if (sidebarTheme && sidebarTheme.currentValue !== sidebarTheme.previousValue) {
      switch (this.sidebarTheme) {
        case SIDEBAR_THEME_DARK:
          document.body.classList.add('left-side-menu-dark');
          document.body.classList.remove('left-side-menu-condensed');
          break;
        default:
          document.body.classList.remove('left-side-menu-dark');
          document.body.classList.remove('left-side-menu-condensed');
          break;
      }
    }

    // sidebar type
    if (sidebarType && sidebarType.currentValue !== sidebarType.previousValue) {
      switch (this.sidebarType) {
        case SIDEBAR_WIDTH_CONDENSED:
          document.body.classList.add('left-side-menu-condensed');
          document.body.classList.remove('boxed-layout');
          document.body.classList.remove('left-side-menu-dark');
          break;
        default:
          document.body.classList.remove('left-side-menu-condensed');
          break;
      }
    }
  }

  isMobile() {
    const ua = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua);
  }

  ngAfterViewInit() {
    const topnav = document.querySelector('body');
    topnav.removeAttribute('data-layout');

    document.body.classList.remove('authentication-bg');
    document.body.classList.remove('authentication-bg-pattern');

    if (!this.isMobile()) {
      document.body.classList.add('sidebar-enable');
    }

    // activate the condensed sidebar if smaller devices like ipad or tablet
    if (window.innerWidth >= 768 && window.innerWidth <= 1028) {
      document.body.classList.add('left-side-menu-condensed');
    }
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

    if (document.body.classList.contains('sidebar-enable')) {
      document.body.classList.remove('sidebar-enable');
      document.body.classList.add('left-side-menu-condensed');
    } else {
      if (document.body.classList.contains('left-side-menu-condensed')) {
        document.body.classList.remove('left-side-menu-condensed');
      }
      document.body.classList.add('sidebar-enable');
    }

    if (!this.isMobile()) {
      document.body.classList.toggle('enlarged');
    }
  }
}
