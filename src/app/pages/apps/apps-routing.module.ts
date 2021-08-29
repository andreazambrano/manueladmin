import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { PatientsComponent } from './patients/patients.component';
import { DentistsComponent } from './dentists/dentists.component';
import { DentistviewComponent } from './dentistview/dentistview.component';
import { SettingsappComponent } from './settingsapp/settingsapp.component';
import { NewprojectComponent } from './newproject/newproject.component';

const routes: Routes = [
    {
        path: 'apps-calendar',
        component: CalendarComponent
    },
    {
        path: 'newproject',
        component: NewprojectComponent
    },
    {
        path: 'dentists',
        component: DentistsComponent
    }, 
    {
        path: 'settingsapp',
        component: SettingsappComponent
    },  
    {
        path: 'dentistview/:id',
        component: DentistviewComponent
    },
    {
        path: 'patients',
        component: PatientsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppsRoutingModule { }
