import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
   providedIn: 'root'
})
export class PojoService {
	private adminFlag= false;
	public count;

   	constructor(private http: HttpClient) { }

   	setAdminFlag(flag){
   		this.adminFlag  = flag;
   	}

   	getAdminFlag(){
   	 return this.adminFlag;
   	}

   	setNotification(count){
   		this.count  = count;
   	}

   	getNotification(){
   	 return this.count;

   	}
}