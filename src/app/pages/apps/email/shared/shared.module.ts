import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ToolbarComponent, ListComponent],
  imports: [
    CommonModule,
    NgbDropdownModule
  ],
  exports: [ToolbarComponent, ListComponent]
})
export class SharedModule { }
