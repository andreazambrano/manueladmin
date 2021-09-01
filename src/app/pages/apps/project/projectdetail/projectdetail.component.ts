import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';

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
      private formBuilder: FormBuilder,
    private route:ActivatedRoute,
    private router: Router
    ) { }
    addModules = false;
    uploading = false;
    buttonDisabled = false;
     newModuleTittle="";
  newModuleLink="";
  newModuleDuration="";
   ngFormUpdateTixData: FormGroup;

    submit: boolean;
public tix:TixInterface ={
    tittle:"",
    description:"",    
    images:[],
    modules:[],
    costPrice:""
  };
    public tixs:TixInterface;
  projectActivity: Activity[];
  widgetData: Widget[];
  
addNewModule(){
  this.buttonDisabled=true;
  this.addModules=true;
}
  addModule(){
  let Duration = this.newModuleDuration;
  let Link = this.newModuleLink;
  let Tittle =this.newModuleTittle;
  this.tix.modules.push({tittle:Tittle,duration:Duration,link:Link});
  this.addModules=false;
  this.uploading=true;
  this.newModuleDuration="";
  this.newModuleLink ="";
  this.newModuleTittle="";
  this.okUpdateCourse(this.tix);
}
continue(){
  this.buttonDisabled=false;
  this.uploading=false;
}
 okUpdateCourse(tix){

    let id = this.tix.id;
    this.dataApi.updateTix(this.tix, id)
      .subscribe(
         dentist => this.continue()
    );
  }

    getCourseDetail(id: string){
    this.dataApi.getCourseDetailById(id).subscribe(tix => (this.tix = tix)); 
  }
go(link){
  window.open(link, "_blank");
}
  ngOnInit() {

     this.ngFormUpdateTixData = this.formBuilder.group({
          newModuleLink:['',[]], 
          newModuleDuration:['',[]], 
          newModuleTittle:['',[]]
      });
    this.tix.images=[];
    this.tix.modules=[];
     this.getCourseDetail(this.route.snapshot.paramMap.get('id'));
 
    /**
     * Fetches the project data
     */
    this._fetchData();
  }
  get fval() {
    return this.ngFormUpdateTixData.controls;
  }
  get fval2() {
    return this.ngFormUpdateTixData.controls;
  }
  private _fetchData() {
    this.projectActivity = projectActivity;
    this.widgetData = widgetData;
  }
}
