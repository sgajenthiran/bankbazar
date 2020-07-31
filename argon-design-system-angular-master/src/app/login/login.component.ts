import { Component, OnInit } from '@angular/core';
import { PojoService } from '../services/pojoservice';
import { RegisterService } from '../services/registerservice';

import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { AlertsSectionComponent } from './../sections/alerts-section/alerts-section.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService




@Component({
selector: 'progress-spinner-overview-example',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  alert=false;
  alertMsg="";
  public persondata = [];

  constructor(
        private registerService: RegisterService,
        private pojoService: PojoService,
        private router: Router,
        private authService: AuthService,
        private modalService: NgbModal,
        private ngxService: NgxUiLoaderService) { }

  

  ngOnInit() {
  }
 onClickSubmit(data:any) {
  this.ngxService.start(); 
  
    this.registerService.getData('getLoginAuthendicate').subscribe((data) => {
            this.authService.login(data);
            if(data.admin == "Y"){  this.pojoService.setAdminFlag(true); } 
            else { this.pojoService.setAdminFlag(false); }

            this.persondata = Array.from(Object.keys(data), k=>data[k]);
            //this.persondata='{"result":"Success","userDetail":{"firstName":"sathishkumar","email":"sathishkumar.g1989@gmail.com","phonenumber":"9003274341","accountnumber":"1234567890","password":"sathish@1989","pancard":null,"admin":"true","date":"2020-07-19T16:49:21.000Z"},"count":1}';
            //console.log(this.persondata);
            this.ngxService.stop();
            this.router.navigate(['/home']);
        });

      /*if((data.userName=="admin") && (data.password=="test")){
        this.pojoService.setAdminFlag(true);
        this.authService.login(data);
        console.log("true");
        this.ngxService.stop();
        this.router.navigate(['/home']);
      }else{
        this.ngxService.stop();
        this.alert=true;
        this.alertMsg="Invalid User and Password";
      console.log("false");
      this.pojoService.setAdminFlag(false);
      }*/
   }
}
