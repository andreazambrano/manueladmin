import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule, NgbTooltipModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { ClickOutsideModule } from 'ng-click-outside';

import { UIModule } from '../shared/ui/ui.module';
import { EventService } from '../core/services/event.service';

import { LayoutComponent } from './layout.component';
import { MenuComponent } from './shared/menu/menu.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RightsidebarComponent } from './shared/rightsidebar/rightsidebar.component';
import { LeftsidebarComponent } from './shared/leftsidebar/leftsidebar.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { VerticalComponent } from './vertical/vertical.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [LayoutComponent, MenuComponent, TopbarComponent, RightsidebarComponent, FooterComponent, LeftsidebarComponent, FooterComponent, HorizontalComponent, VerticalComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbCollapseModule,
    ClickOutsideModule,
    UIModule
  ],
  exports: [TopbarComponent, MenuComponent, LeftsidebarComponent, FooterComponent],
  providers: [EventService]
})
export class LayoutsModule { }
