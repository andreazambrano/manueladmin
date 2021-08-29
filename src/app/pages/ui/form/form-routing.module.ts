import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElementsComponent } from './elements/elements.component';
import { ValidationComponent } from './validation/validation.component';
import { UploadsComponent } from './uploads/uploads.component';
import { EditorComponent } from './editor/editor.component';
import { WizardComponent } from './wizard/wizard.component';
import { AdvancedComponent } from './advanced/advanced.component';

const routes: Routes = [
    {
        path: 'forms-basic',
        component: ElementsComponent
    },
    {
        path: 'forms-validation',
        component: ValidationComponent
    },
    {
        path: 'forms-uploads',
        component: UploadsComponent
    },
    {
        path: 'forms-editor',
        component: EditorComponent
    },
    {
        path: 'forms-wizard',
        component: WizardComponent
    },
    {
        path: 'forms-advanced',
        component: AdvancedComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FormRoutingModule { }
