import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatherComponent } from './feather/feather.component';
import { UniconsComponent } from './unicons/unicons.component';

const routes: Routes = [
    {
        path: 'icon-feather',
        component: FeatherComponent
    },
    {
        path: 'icon-unicons',
        component: UniconsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IconsRoutingModule { }
