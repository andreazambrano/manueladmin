import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIModule } from '../../../shared/ui/ui.module';

import { NgbDropdownModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { TasksRoutingModule } from './tasks-routing.module';

import { DndModule } from 'ngx-drag-drop';

import { TasklistComponent } from './tasklist/tasklist.component';
import { KanbanboardComponent } from './kanbanboard/kanbanboard.component';

@NgModule({
    imports: [
        CommonModule,
        TasksRoutingModule,
        UIModule,
        NgbDropdownModule,
        NgbCollapseModule,
        DndModule
    ],
    declarations: [TasklistComponent, KanbanboardComponent]
})

export class TasksModule { }
