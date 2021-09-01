import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

 import { TixInterface } from '../models/tix-interface';
 import { UserInterface } from '../models/user-interface';
 import { DentistInterface } from '../models/dentist-interface';
 import { SpecInterface } from '../models/spec-interface';
 import { PatientInterface } from '../models/patient-interface';
 import { SuscriberInterface } from '../models/suscriber-interface';
// import { SaleInterface } from '../models/sale-interface';
import { OrderInterface } from '../models/order-interface';
// import { InfoInterface } from '../models/info-interface';
import { UserWService } from "./user-w.service";

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
	// info: Observable<any>;
	 orders: Observable<any>;
	 tix: Observable<any>; 
	 spec: Observable<any>; 
	 specs: Observable<any>; 
	 tixs: Observable<any>;
	 user: Observable<any>; 
	 users: Observable<any>;
	  dentist: Observable<any>; 
	 dentists: Observable<any>;
	 patient: Observable<any>; 
	 patients: Observable<any>; suscriber: Observable<any>; 
	 suscribers: Observable<any>;
	// sale: Observable<any>;
	order: Observable<any>;
  constructor(
  	public _uw:UserWService,
  	private http: HttpClient
  	) {}
  	headers : HttpHeaders = new HttpHeaders({
  		"Content-Type":"application/json"
  	
  		});
  	updateTix(tix :TixInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=`https://db.buckapi.com:3062/api/tixes/${id}`;
		return this.http
		.put<TixInterface>(url_api, tix)
		.pipe(map(data => data));
}
	getAllTixs(){
		const url_api = 'hhttps://db.buckapi.com:3062/api/tixes?filter[where][status]=activated';
		return this.http.get(url_api);
	}
 		getTamanoDentist(){
	 	const url_api = 'https://db.buckapi.com:3062/api/dentist?filter[where][status]=new';
	 	return (this.dentists = this.http.get(url_api));
	 }
 		getTamanoSuscriber(){
	 	const url_api = 'https://db.buckapi.com:3062/api/suscriber?filter[where][status]=new';
	 	return (this.suscribers = this.http.get(url_api));
	 }
	getAllQuotes(){
		const url_api = 'https://db.buckapi.com:3062/api/order?filter[where][orderType]=appointment';
		return this.http.get(url_api);
	}
		saveTixFree(tix :TixInterface){
	//	let token = this.authService.getToken();
		const url_api='https://db.buckapi.com:3062/api/tixes';
		return this.http
		.post<TixInterface>(url_api, tix)
		.pipe(map(data => data));
	}
	// getTamanoIni(){
	// 	const url_api = 'https://db.buckapi.com:3025/api/tixes?filter[where][initload]=activated';
	// 	return (this.tixs = this.http.get(url_api));
	// }
 	getAllTixsReturn(){
		const url_api = 'https://db.buckapi.com:3062/api/tixes?filter[where][status]=activated';
		return (this.tixs = this.http.get(url_api));
	}
	getAllDentistsReturn(){
		const url_api = 'https://db.buckapi.com:3062/api/dentist';
		return (this.users = this.http.get(url_api));
	}	
	getAllSuscribersReturn(){
		const url_api = 'https://db.buckapi.com:3062/api/suscriber?filter[where][status]=new';
		return (this.suscribers = this.http.get(url_api));
	}
	getAllSpecs(){
		const url_api = 'https://db.buckapi.com:3062/api/specialties';
		return (this.specs = this.http.get(url_api));
	}

	// getAllTixsInitload(){
	// 	const url_api = 'https://db.buckapi.com:3025/api/tixes?filter[where][initload]=activated';
	// 	return this.http.get(url_api);
	// }
	// getInfo(){
	// 	const url_api=`https://db.buckapi.com:3025/api/infos/`;
	// 	this.info = this.http.get(url_api);
	// 	return (this.info);
	// }
	// saveSale(sale :SaleInterface){
	// 	const url_api='https://db.buckapi.com:3025/api/sale';
	// 	return this.http
	// 	.post<SaleInterface>(url_api, sale)
	// 	.pipe(map(data => data));
	// }
	saveOrder(order :OrderInterface){
		const url_api='https://db.buckapi.com:3025/api/order';
		return this.http
		.post<OrderInterface>(url_api, order)
		.pipe(map(data => data));
	}
// sendMailNewBookAppToAdmin(book){
// 		const url_api='https://email.masterdent24.org:3005/newBookAppToAdmin';
// 		return this.http
// 		.post(url_api, book)
// 		.pipe(map(data => data));
// 	}
	updateOrder(order :OrderInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=`https://db.buckapi.com:3025/api/order/${id}`;
		return this.http
		.put<OrderInterface>(url_api, order)
		.pipe(map(data => data));
	}
	updateDentist(dentist :DentistInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=`https://db.buckapi.com:3062/api/dentist/${id}`;
		return this.http
		.put<DentistInterface>(url_api, dentist)
		.pipe(map(data => data));
	}
	getProfileById(id:string){
		let indice = id;
		const url_api=`https://db.buckapi.com:3062/api/dentist/${indice}`;
		this.dentist = this.http.get(url_api);
		return (this.dentist);
	}	
	getCourseDetailById(id:string){
		let indice = id;
		const url_api=`https://db.buckapi.com:3062/api/tixes/${indice}`;
		this.dentist = this.http.get(url_api);
		return (this.dentist);
	}
	
	getOrderByNpedido(npedido: string){
		const url_api = `https://db.buckapi.com:3025/api/order?filter[where][npedido]=${npedido}`;
		this.order = this.http.get(url_api);
		return (this.order);

		// return this.http.get(url_api);

		// return this.http.get(url_api);
	}

		// let indice = id;
		// const url_api=`https://db.andesproadventures.com:3018/api/book/${indice}`;
		// this.book = this.http.get(url_api);
		// return (this.book);


		// this.info = this.http.get(url_api);
		// return (this.info);
}