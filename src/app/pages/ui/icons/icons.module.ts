import { NgModule } from '@angular/core';

import { UIModule } from '../../../shared/ui/ui.module';
import { IconsRoutingModule } from './icons-routing.module';

import { UniconsComponent } from './unicons/unicons.component';
import { FeatherComponent } from './feather/feather.component';

@NgModule({
    declarations: [FeatherComponent, UniconsComponent],
    imports: [
        IconsRoutingModule,
        UIModule
    ]
})

export class IconsModule { }
