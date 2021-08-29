import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WidgetsComponent } from './widgets/widgets.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
    {
        path: 'widgets',
        component: WidgetsComponent
    },
    {
        path: 'bootstrap',
        component: BootstrapComponent
    },
    {
        path: 'charts',
        component: ChartsComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UiRoutingModule { }
