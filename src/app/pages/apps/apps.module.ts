import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FilePickerModule } from  '../../../assets/file-picker/src/public_api';
import { UIModule } from '../../shared/ui/ui.module';
import { AppsRoutingModule } from './apps-routing.module';

import { EmailModule } from './email/email.module';
import { ProjectModule } from './project/project.module';
import { TasksModule } from './tasks/tasks.module';
import { FullCalendarModule } from '@fullcalendar/angular';

import { CalendarComponent } from './calendar/calendar.component';
import { DentistsComponent } from './dentists/dentists.component';
import { SettingsappComponent } from './settingsapp/settingsapp.component';
import { DentistviewComponent } from './dentistview/dentistview.component';
import { ProjectsComponent } from './projects/projects.component';
import { PatientsComponent } from './patients/patients.component';
import { NewprojectComponent } from './newproject/newproject.component';

@NgModule({
    declarations: [
    CalendarComponent,
    ProjectsComponent,
    PatientsComponent,
    DentistsComponent,
    SettingsappComponent,
    DentistviewComponent,
    NewprojectComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModalModule,
        FullCalendarModule,
        AppsRoutingModule,
        UIModule,
        EmailModule,
        ProjectModule,
        TasksModule,
        FilePickerModule,
    ],
     schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppsModule { }
