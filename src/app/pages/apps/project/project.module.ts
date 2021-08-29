import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIModule } from '../../../shared/ui/ui.module';

import { ProjectRoutingModule } from './project-routing.module';
import { NgbTabsetModule, NgbProgressbarModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { ProjectlistComponent } from './projectlist/projectlist.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';

@NgModule({
    imports: [
        CommonModule,
        UIModule,
        ProjectRoutingModule,
        NgbTabsetModule,
        NgbTooltipModule,
        NgbProgressbarModule,
    ],
    declarations: [ProjectlistComponent, ProjectdetailComponent],
})

export class ProjectModule { }
