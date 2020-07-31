import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { PojoService } from '../services/pojoservice';


@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
            private pojoService: PojoService,

  ) {}

  login(user: User) {
    if (user.userName !== '' && user.password !== '' ) {
    console.log(user.count);
    this.pojoService.setNotification(user.count);
      this.loggedIn.next(true);
      //this.router.navigate(['/']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }
}