import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { PojoService } from '../../services/pojoservice';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    isLoggedIn$: Observable<boolean>;
    private isLogged = false;

    constructor(public location: Location, private router: Router, private pojoService : PojoService,private authService: AuthService) {
    }

    ngOnInit() {
        this.isLoggedIn$ = this.authService.isLoggedIn;
        this.authService.isLoggedIn.subscribe((login) => {
            this.isLogged =login;
        });


    console.log("testFlag"+this.pojoService.getAdminFlag());
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
        let isShown = this.pojoService.getAdminFlag();
        if (event instanceof NavigationStart) {
           if (event.url != this.lastPoppedUrl)
               this.yScrollStack.push(window.scrollY);
       } else if (event instanceof NavigationEnd) {
           if (event.url == this.lastPoppedUrl) {
               this.lastPoppedUrl = undefined;
               window.scrollTo(0, this.yScrollStack.pop());
           } else
               window.scrollTo(0, 0);
       }
     });
     this.location.subscribe((ev:PopStateEvent) => {
         this.lastPoppedUrl = ev.url;
     });
    }

    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '#/home' ) {
            return true;
        }
        else {

            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '#/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }

    onLogout() {
        this.authService.logout();
      }

      onLogIn() {
        this.router.navigate(['/login']);
      }
}
