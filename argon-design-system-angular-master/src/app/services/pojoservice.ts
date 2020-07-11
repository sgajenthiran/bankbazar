import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
   providedIn: 'root'
})
export class PojoService {
	private adminFlag= false;

   	constructor(private http: HttpClient) { }

   	setAdminFlag(flag){
   		this.adminFlag  = flag;
   	}

   	getAdminFlag(){
   	 return this.adminFlag;
   	}
}