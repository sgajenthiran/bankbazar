import { Component, OnInit } from '@angular/core';
import { PojoService } from '../services/pojoservice';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
 
  constructor(private pojoService: PojoService,private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
 onClickSubmit(data:any) {
      //alert(JSON.stringify(data)+" "+"Entered Email id : " + data.emailid);
      //alert(data.passwd);
      if((data.userName=="admin") && (data.password=="test")){
        this.authService.login(data);
      console.log("true");
      this.pojoService.setAdminFlag(true);
      this.router.navigate(['/home']);

      }else{
      console.log("false");
      this.pojoService.setAdminFlag(false);
      }
   }
}
