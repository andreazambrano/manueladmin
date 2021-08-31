import { Component, OnInit } from '@angular/core';

import { projectData } from './data';

import { List } from './projectlist.model';
import { DataApiService } from '../../../../core/services/data-api.service';
import { UserWService } from "../../../../core/services/user-w.service";
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TixInterface } from '../../../../core/models/tix-interface'; 

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.scss']
})

/**
 * Project-list component - handling project-list with sidebar and content
 */
export class ProjectlistComponent implements OnInit {
    public tix:TixInterface;
    public tixs:TixInterface;

  projectData: List[];

  constructor(
 private dataApi: DataApiService,
    public _uw:UserWService,
    private location: Location,
        private route:ActivatedRoute,
    private router: Router
    ) { }
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
//    this._fetchData();
      this.getAllTixs();

  }

  /**
   * Fetches the Projects data
   */
  private _fetchData() {
    this.projectData = projectData;
  }
}
