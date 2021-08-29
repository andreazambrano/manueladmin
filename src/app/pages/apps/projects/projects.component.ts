import { Component, OnInit } from '@angular/core';

import { revenueAreaChart, targetsBarChart, salesDonutChart, ordersData } from './data';

import { ChartType, OrdersTable } from './projects.model';
import { DataApiService } from '../../../core/services/data-api.service';
import { TixInterface } from '../../../core/models/tix-interface'; 
import { UserWService } from "../../../core/services/user-w.service";
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})


export class ProjectsComponent implements OnInit {
    public tix:TixInterface;
    public tixs:TixInterface;
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
  getAllTixs(){
        this.dataApi.getAllTixsReturn().subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("hey");
       }else{
        this.tixs=res;            
        }
     });  
    }

  ngOnInit() {
         this.getAllTixs();
    this.breadCrumbItems = [{ label: 'Projects', active: true }];

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