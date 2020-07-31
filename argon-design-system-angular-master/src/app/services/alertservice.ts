import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable({
   providedIn: 'root'
})
export class RegisterService {
   private finaldata = [];
   private apiurl = "http://192.168.18.26:8280/saveUserDetails";
   constructor(private http: HttpClient) { }
   
   getData() {
      return this.http.get(this.apiurl) 
      		.map(this.extractData)
            .catch(this.handleError); 
   	}

   	private handleError(error: any): Promise<any> {
   	    console.error('An error occurred', error); // for demo purposes only
   	    //let body = error.json();
   	    return Promise.reject(error.message || error);
   	}

   	 private extractData(res: any) {
        console.log(res);
        /*let body = res.json();
        let body = res._body;*/
        return res || {};
    }

    private extractDataPost(res: any) {
        var contentType = res.headers.get("content-type");
        console.log(contentType);
       
        if (contentType && contentType.indexOf("application/json") !== -1) {
            let body = res.json();
            //let body =res._body;    
            return body || {};
        } else {
            return res._body;
        }
    }
}