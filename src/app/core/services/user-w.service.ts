import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserWService {
	admin:boolean;
	adminName:string;
	affiliate:boolean;
	allLoaded:boolean=false;
	assBook:any={};
	assValidation:any={};
	bandera:string;
	book:any={};
	bookToCancel:any={};
	botas:boolean=false;
	car:any[]=[];
	card:any={};
	cardsResult:any[]=[];
	currency:number=1;
		comision:number=1;
		paypal:boolean=false;
		zelle:boolean=false;
	categorySelected:string;
	editingTrek:boolean=false;
	errorFormAffiliate:boolean;
	errorFormAddtixs:boolean;
	errorFormPartner:boolean;
	errorFormSendSale:boolean;
	errorFormSendOrder:boolean;
	errorFormPago:boolean;
	feet:number=0;
	file:any[]=[];
	filter:boolean=false;
	foredit:any={};
	globalCategory:boolean=true;
	idCard:string;
	imagePreviewProduct:string;
	images:any[]=[];
	ordersA:any[]=[];
	info:any={};
	isLogged:boolean=false;
	loaded:boolean=false;
	method:string;
	name:string;
	newusers:number=0;
	moccs:boolean=false;
	numProd:number=0;
	order:any={};
	dentistsA:any[]=[];
	patientsA:any[]=[];
	orderPro:any={};
	pagoImage:any[]=[];
	pedido:any={};
	partner:boolean;
	queue:any[]=[];
	recargo:boolean=false;
	selectorA:boolean;
	selectorB:boolean;
	showAll:boolean=false;
	subTotal:number=0;
	tixs:any[]=[];

	tixPreview:any={};
	tixsOrigin:any[]=[];
	tixsDiscount:any={};
	tixsNew:any={};
	specs:any={};
	total:number=0;	
	totalBooks:number;
	totalDiscount:number=0;
	totalSpecs:number=0;
	totalNew:number=0;
	totalProducts:number=0;
	totalPatients:number=0;
	totalDentists:number=0;
	totalTixs:number;
	totalOrders:number;
	type:string;
	typeGlobal:boolean=false;
	typeSize:boolean=false;
	user:any={};
	userd:string;
	usersPending:boolean;
	userW:any[]=[];
	validation:any={};
	validationEmail:any={};
	validationToDelete:any={};
	zapatos:boolean=false;
	// book:any[]=[];
  constructor() { }
}


