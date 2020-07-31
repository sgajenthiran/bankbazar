import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/registerservice';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService
import { NgbdModalComponent } from '../modal/modal.component';

import { AlertComponent } from '../alert/alert.component';
  import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';



@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
public alertbox;
 model: any = {};
    test : Date = new Date();
    public persondata = [];
    focus;
    focus1;
    focus2;
    closeResult: string;
    cnfrmpaswd:false;
         

    constructor(private registerService: RegisterService,private ngxService: NgxUiLoaderService,private modalService: NgbModal) { }

    ngOnInit() {

    this.alertbox  = new AlertComponent();

    }

   onClickSubmit(data:any) {
        if(data.password == data.confirmPassword){
        this.cnfrmpaswd=false;
        this.ngxService.start();
        this.registerService.getData('saveUserDetails').subscribe((data) => {
            console.log(data);
            this.persondata = Array.from(Object.keys(data), k=>data[k]);
            //this.persondata='{"result":"Success","userDetail":{"firstName":"sathishkumar","email":"sathishkumar.g1989@gmail.com","admin":"N","count":0}}';
            console.log(this.persondata);
            this.ngxService.stop();
            this.alertbox.open();
            this.open('classic3','' , '');
            console.log('testingdemo');
    
            console.log(this.persondata);
        });
      //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
      //console.log(JSON.stringify(data));
      }else{
     // this.cnfrmpaswd=true;
      }
   }
open(content, type, modalDimension){
  this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
                this.closeResult = 'Closed with: $result';
            }, (reason) => {
                this.closeResult = 'Dismissed $this.getDismissReason(reason)';
            });
}

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  'with: $reason';
        }
    }


  

}
