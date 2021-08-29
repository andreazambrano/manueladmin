import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbProgressbarModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../ui/ui.module';

import { StatchartComponent } from './statchart/statchart.component';
import { OverviewComponent } from './overview/overview.component';
import { MembersComponent } from './members/members.component';
import { TaskComponent } from './task/task.component';
import { ChatComponent } from './chat/chat.component';
import { StatprogressComponent } from './statprogress/statprogress.component';
import { StatComponent } from './stat/stat.component';
import { ChartComponent } from './chart/chart.component';
import { Profile1Component } from './userprofile/profile1/profile1.component';
import { Profile2Component } from './userprofile/profile2/profile2.component';
import { Profile3Component } from './userprofile/profile3/profile3.component';
import { Profile4Component } from './userprofile/profile4/profile4.component';
import { ActivitiesComponent } from './activities/activities.component';

@NgModule({
    // tslint:disable-next-line: max-line-length
    declarations: [StatchartComponent, OverviewComponent, MembersComponent, TaskComponent, ChatComponent, StatprogressComponent, StatComponent, ChartComponent, Profile1Component, Profile2Component, Profile3Component, Profile4Component, ActivitiesComponent],
    imports: [
        CommonModule,
        NgApexchartsModule,
        UIModule,
        NgbProgressbarModule, NgbDropdownModule,
        FormsModule, ReactiveFormsModule,
    ],
    // tslint:disable-next-line: max-line-length
    exports: [StatchartComponent, OverviewComponent, MembersComponent, TaskComponent, ChatComponent, StatprogressComponent, StatComponent, ChartComponent, Profile1Component, Profile2Component, Profile3Component, Profile4Component, ActivitiesComponent]
})
export class WidgetModule { }

