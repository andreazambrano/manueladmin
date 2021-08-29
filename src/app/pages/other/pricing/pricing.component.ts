import { Component, OnInit } from '@angular/core';

import { pricingData } from './data';
import { Price } from './pricing.model';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor() { }

  pricingData: Price[];

  ngOnInit() {
    this.pricingData = pricingData;
  }

}
