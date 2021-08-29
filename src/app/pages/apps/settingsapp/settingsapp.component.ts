import { Component, OnInit } from '@angular/core';

import { revenueAreaChart, targetsBarChart, salesDonutChart, ordersData } from './data';

import { ChartType, OrdersTable } from './settingsapp.model';
import { DataApiService } from '../../../core/services/data-api.service';
import { UserInterface } from '../../../core/models/user-interface'; 
import { SpecInterface } from '../../../core/models/spec-interface'; 
import { UserWService } from "../../../core/services/user-w.service";
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'settingsapp',
  templateUrl: './settingsapp.component.html',
  styleUrls: ['./settingsapp.component.scss']
})


export class SettingsappComponent implements OnInit {
    public user:UserInterface;
    public users:UserInterface; 
    public spec:SpecInterface;
    public specs:SpecInterface;
  breadCrumbItems: Array<{}>;
  constructor(  private dataApi: DataApiService,
    public _uw:UserWService,
    private location: Location,
        private route:ActivatedRoute,
    private router: Router) { }

  revenueAreaChart: ChartType;
  targetsBarChart: ChartType;
  salesDonutChart: ChartType;
  ordersData: OrdersTable[];
  getAllSpecs(){
        this.dataApi.getAllSpecs().subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("hey");
       }else{
        this.specs=res;            
        }
     });  
    }

  ngOnInit() {
         this.getAllSpecs();
    this.breadCrumbItems = [{ label: 'Ajustes de aplicación', active: true }];

    /**
     * Fetches the data
     */
    this._fetchData();
  }

  /**
   * fetches the dashboard value
   */
  private _fetchData() {
    this.revenueAreaChart = revenueAreaChart;
    this.targetsBarChart = targetsBarChart;
    this.salesDonutChart = salesDonutChart;
    this.ordersData = ordersData;
  }
}