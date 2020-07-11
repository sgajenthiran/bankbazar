import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/registerservice';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    public persondata = [];
    focus;
    focus1;
    focus2;
   
    constructor(private registerService: RegisterService) { }

    ngOnInit() {
		  this.registerService.getData().subscribe((data) => {
         this.persondata = Array.from(Object.keys(data), k=>data[k]);
         let response = 'Login:{"result":"success","admin":"true","Username":"reva","Notificationcount":"0"}';
         console.log(this.persondata);
      });

    }

   onClickSubmit(data:any) {
      //alert(JSON.stringify(data)+" "+"Entered Email id : " + data.name);
      //alert(data.email);
   }
}
