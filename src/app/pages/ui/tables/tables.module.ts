import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../../../shared/ui/ui.module';

import { TablesRoutingModule } from './tables-routing.module';

import { BasicComponent } from './basic/basic.component';
import { AdvancedComponent } from './advanced/advanced.component';

import { AdvancedSortableDirective } from './advanced/advanced-sortable.directive';

@NgModule({
  declarations: [BasicComponent, AdvancedComponent , AdvancedSortableDirective],
  imports: [
    CommonModule,
    UIModule,
    TablesRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule
  ]
})
export class TablesModule { }
