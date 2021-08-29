import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarterComponent } from './starter/starter.component';
import { ProfileComponent } from './profile/profile.component';
import { ActivityComponent } from './activity/activity.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingComponent } from './pricing/pricing.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';

const routes: Routes = [
    {
        path: 'pages-starter',
        component: StarterComponent
    },
    {
        path: 'pages-profile',
        component: ProfileComponent
    },
    {
        path: 'pages-activity',
        component: ActivityComponent
    },
    {
        path: 'pages-invoice',
        component: InvoiceComponent
    },
    {
        path: 'pages-pricing',
        component: PricingComponent
    },
    {
        path: 'pages-error-404',
        component: Error404Component
    },
    {
        path: 'pages-error-500',
        component: Error500Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class OtherRoutingModule { }
