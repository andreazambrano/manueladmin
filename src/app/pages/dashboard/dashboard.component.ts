import { Component, OnInit } from '@angular/core';

import { revenueAreaChart, targetsBarChart, salesDonutChart, ordersData } from './data';

import { ChartType, OrdersTable } from './dashboard.model';
import { OrderInterface } from '../../core/models/order-interface'; 

import { UserWService } from "../../core/services/user-w.service";
import { DataApiService } from '../../core/services/data-api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

/**
 * Dashboard component - handling dashboard with sidear and content
 */
export class DashboardComponent implements OnInit {

  constructor(
 public _uw:UserWService, 
    private dataApiService: DataApiService
    ) { }
      public newusers=0;
    public registeredusers=0;
  revenueAreaChart: ChartType;
  targetsBarChart: ChartType;
  salesDonutChart: ChartType;
  ordersData: OrdersTable[];
  public getTamanoSuscriber(){
    this.dataApiService
    .getTamanoSuscriber()
    .subscribe((res:any) => {
      if (res[0] === undefined){
        return
        }else{
         this._uw.totalPatients = res.length;
         this._uw.patientsA=res;
        }
      });
  }public getTamanoDentist(){
    this.dataApiService
    .getTamanoDentist()
    .subscribe((res:any) => {
      if (res[0] === undefined){
        return
        }else{
         this._uw.totalDentists = res.length;
         this._uw.dentistsA=res;
      
        }
      });
  }
  ngOnInit() {
  this.getTamanoSuscriber();
  this.getTamanoDentist();
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
