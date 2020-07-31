import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})
export class RegisterService {
   private data = {}; 
   private apiurl = "http://192.168.18.26:8280/";
   constructor(private http: HttpClient) { }


   getData(action) {

      return this.http.get(this.apiurl+action);
   }
}