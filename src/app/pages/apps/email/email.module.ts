import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIModule } from '../../../shared/ui/ui.module';
import { EmailRoutingModule } from './email-routing.module';
import { SharedModule } from './shared/shared.module';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { InboxComponent } from './inbox/inbox.component';
import { ReademailComponent } from './reademail/reademail.component';
import { EmailcomposeComponent } from './emailcompose/emailcompose.component';

@NgModule({
    imports: [
        CommonModule,
        EmailRoutingModule,
        CKEditorModule,
        SharedModule,
        UIModule,
        NgbDropdownModule
    ],
    declarations: [InboxComponent, ReademailComponent, EmailcomposeComponent]
})

export class EmailModule { }
