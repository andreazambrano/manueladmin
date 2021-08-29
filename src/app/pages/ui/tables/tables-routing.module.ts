import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './basic/basic.component';
import { AdvancedComponent } from './advanced/advanced.component';

const routes: Routes = [
    {
        path: 'tables-basic',
        component: BasicComponent
    },
    {
        path: 'tables-advanced',
        component: AdvancedComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule {}
