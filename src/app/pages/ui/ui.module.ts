import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { UiRoutingModule } from './ui-routing.module';

import { NgApexchartsModule } from 'ng-apexcharts';
import { FlatpickrModule } from 'angularx-flatpickr';

// tslint:disable-next-line: max-line-length
import { NgbDatepickerModule, NgbDropdownModule, NgbAlertModule, NgbToastModule, NgbButtonsModule, NgbTabsetModule, NgbAccordionModule, NgbModalModule, NgbProgressbarModule, NgbPopoverModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../../shared/ui/ui.module';
import { WidgetModule } from '../../shared/widgets/widget.module';
import { IconsModule } from './icons/icons.module';
import { FormModule } from './form/form.module';
import { TablesModule } from './tables/tables.module';
import { WidgetsComponent } from './widgets/widgets.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
    declarations: [WidgetsComponent, BootstrapComponent, ChartsComponent],
    imports: [
        CommonModule,
        UiRoutingModule,
        FormsModule,
        FlatpickrModule.forRoot(),
        NgApexchartsModule,
        NgbDatepickerModule,
        NgbDropdownModule,
        NgbAlertModule,
        NgbToastModule,
        NgbTabsetModule,
        NgbButtonsModule,
        NgbAccordionModule,
        NgbModalModule,
        NgbProgressbarModule,
        NgbPopoverModule,
        NgbTooltipModule,
        UIModule,
        WidgetModule,
        IconsModule,
        TablesModule,
        FormModule
    ]
})

export class UiModule { }
