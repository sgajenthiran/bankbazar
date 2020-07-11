import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app.routing';


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

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [RegisterService, PojoService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
