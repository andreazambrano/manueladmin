import { Component, OnInit } from '@angular/core';

import { projectActivity, widgetData } from './data';

import { Activity, Widget } from './projectdetai.model';
import { DataApiService } from '../../../../core/services/data-api.service';
import { UserWService } from "../../../../core/services/user-w.service";
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TixInterface } from '../../../../core/models/tix-interface'; 

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.scss']
})

/**
 * Project-detail component - handling project-detail with sidebar and content
 */
export class ProjectdetailComponent implements OnInit {

  constructor(
    private dataApi: DataApiService,
    public _uw:UserWService,
    private location: Location,
    private route:ActivatedRoute,
    private router: Router
    ) { }
public tix:TixInterface ={
    tittle:"",
    description:"",    
    link:"",    
    images:[],
    modules:[],
    costPrice:""
  };
    public tixs:TixInterface;
  projectActivity: Activity[];
  widgetData: Widget[];


    getCourseDetail(id: string){
    this.dataApi.getCourseDetailById(id).subscribe(tix => (this.tix = tix)); 
  }
go(link){
  window.open(link, "_blank");
}
  ngOnInit() {
    this.tix.images=[];
    this.tix.modules=[];
     this.getCourseDetail(this.route.snapshot.paramMap.get('id'));
 
    /**
     * Fetches the project data
     */
    this._fetchData();
  }

  private _fetchData() {
    this.projectActivity = projectActivity;
    this.widgetData = widgetData;
  }
}
