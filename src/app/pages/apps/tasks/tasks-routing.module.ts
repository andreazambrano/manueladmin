import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasklistComponent } from './tasklist/tasklist.component';
import { KanbanboardComponent } from './kanbanboard/kanbanboard.component';

const routes: Routes = [
    {
        path: 'task-list',
        component: TasklistComponent
    },
    {
        path: 'task-board',
        component: KanbanboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TasksRoutingModule { }
