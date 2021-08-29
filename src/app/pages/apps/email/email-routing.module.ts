import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InboxComponent } from './inbox/inbox.component';
import { ReademailComponent } from './reademail/reademail.component';
import { EmailcomposeComponent } from './emailcompose/emailcompose.component';

const routes: Routes = [
    {
        path: 'email-inbox',
        component: InboxComponent
    },
    {
        path: 'email-read',
        component: ReademailComponent
    },
    {
        path: 'email-compose',
        component: EmailcomposeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmailRoutingModule { }
