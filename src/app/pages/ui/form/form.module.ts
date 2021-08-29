import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIModule } from '../../../shared/ui/ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ColorPickerModule } from 'ngx-color-picker';
import { ArchwizardModule } from 'angular-archwizard';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { NgxMaskModule } from 'ngx-mask';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgSelectModule } from '@ng-select/ng-select';

import { FormRoutingModule } from './form-routing.module';

import { ElementsComponent } from './elements/elements.component';
import { ValidationComponent } from './validation/validation.component';
import { EditorComponent } from './editor/editor.component';
import { UploadsComponent } from './uploads/uploads.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { WizardComponent } from './wizard/wizard.component';

@NgModule({
    declarations: [ElementsComponent, ValidationComponent, EditorComponent, UploadsComponent, AdvancedComponent, WizardComponent],
    imports: [
        CommonModule,
        UIModule,
        FormsModule,
        ReactiveFormsModule,
        CKEditorModule,
        NgxMaskModule.forRoot(),
        FlatpickrModule.forRoot(),
        DropzoneModule,
        NgSelectModule,
        ColorPickerModule,
        ArchwizardModule,
        FormRoutingModule
    ]
})

export class FormModule { }
