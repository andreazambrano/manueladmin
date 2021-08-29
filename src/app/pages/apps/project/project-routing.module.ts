import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectlistComponent } from './projectlist/projectlist.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';

const routes: Routes = [
    {
        path: 'project-list',
        component: ProjectlistComponent
    },
    {
        path: 'project-detail',
        component: ProjectdetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule { }
