import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { NgxUiLoaderModule } from 'ngx-ui-loader';



import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterService } from './services/registerservice';
import { PojoService } from './services/pojoservice';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import { AlertComponent } from './alert/alert.component';
import { TabsSectionComponent } from './tabs-section/tabs-section.component';
import {EMIModule} from './emi/emi.module'



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    NgbdModalComponent,
    NgbdModalContent,
    AlertComponent,
    TabsSectionComponent
  ],
  entryComponents: [NgbdModalContent],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    NgxUiLoaderModule,
    HomeModule,
    EMIModule
  ],
  providers: [RegisterService, PojoService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
