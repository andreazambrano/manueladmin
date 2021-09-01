import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { UserWService } from '../../../core/services/user-w.service';
import { DataApiService } from '../../../core/services/data-api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { HttpClient } from  '@angular/common/http';
import { DemoFilePickerAdapter } from  '../../../core/file-picker.adapter';
import { FilePickerComponent } from '../../../../assets/file-picker/src/lib/file-picker.component';
import { FilePreviewModel } from '../../../../assets/file-picker/src/lib/file-preview.model';
import { ValidationError } from '../../../../assets/file-picker/src/lib/validation-error.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TixInterface } from '../../../core/models/tix-interface';  
@Component({
  selector: 'newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.scss']
})
export class NewprojectComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  typeValidationForm: FormGroup; // type validation form
    submit: boolean;
      typesubmit: boolean;
 adapter = new DemoFilePickerAdapter(this.http,this._uw);
  @ViewChild('uploader', { static: true }) uploader: FilePickerComponent;
   myFiles: FilePreviewModel[] = [];

  constructor(    
public formBuilder: FormBuilder,
    private http: HttpClient,
    public _uw:UserWService, 
   public location: Location,
    public router: Router,
    private dataApiService: DataApiService


  	) { }
   public isError = false;
    public tixs:TixInterface;
//    public tix:TixInterface;
  public tix:TixInterface ={
    tittle:"",
    description:"",    
    images:[],
    modules:[],
    costPrice:""
  };
  public pagoImage:any[]=[];
  public images:any[]=[];

  
  sendTix(){
      this.typesubmit = true;
      if (this.typeValidationForm.invalid) {
         this._uw.errorFormAddtixs=true;
      return;
        } 
      this._uw.errorFormAddtixs=false;
      // this.user = this.authService.getCurrentUser();
      // let val=(this.user.id).toString();
      this.tix = this.typeValidationForm.value;
      // this.tix.userd="a"+val;
      this.tix.modules = [];
      this.tix.status="activated";
      this.tix.images=this._uw.images;
      return this.dataApiService.saveTixFree(this.tix)
        .subscribe(
             tix => this.router.navigate(['/courses'])
        );
  }    
    
    
  public okPago(){
   // let id = this._uw.order.id;
 //console.log("id disponible para enviar: "+id);
   // this.updateOrder();
    }



 get type() {
    return this.typeValidationForm.controls;
  }

  /**
   * Type validation form submit data
   */
  typeSubmit() {
    this.typesubmit = true;
  }




  ngOnInit() {this._uw.images=[];this.tix.modules=[];
  this.breadCrumbItems = [ { label: 'Cursos', path: '/courses' }, { label: 'Nuevo curso', path: '/', active: true }];
      this.typeValidationForm = this.formBuilder.group({
      tittle: ['', [Validators.required]],
      costPrice: ['', [Validators.required]],
      description: ['', [Validators.required]]
        });
     // this.ngFormSendPago = this.formBuilder.group({
     // npedido: ["",[Validators.required]]
    //  });
  }


    onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }


   onValidationError(e: ValidationError) {
    console.log(e);
  }
  onUploadSuccess(e: FilePreviewModel) {
   // console.log(e);
  // console.log(this.myFiles);
  this.images=this._uw.file;
  }
  onRemoveSuccess(e: FilePreviewModel) {
    console.log(e);
  }
  onFileAdded(file: FilePreviewModel) {
    
    file.fileName="https://db.buckapi.com:80/imgManuelramos/server/local-storage/tixsImages/"+file.fileName;
    this.myFiles.push(file);
    // this.images.push(file.fileName);

  }

  removeFile() {
  this.uploader.removeFileFromList(this.myFiles[0].fileName);
  }

}