import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { TokenService } from '../token.service';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({});
  constructor(private tokenService: TokenService) {
    if (this.tokenService.ownsToken()) {
      this.decodeJWT();
    }
  }

  private decodeJWT() {
    const token = this.tokenService.returnToken();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
  }

  returnUser() {
    return this.userSubject.asObservable();
  }

  saveToken(token: string) {
    this.tokenService.saveToken(token);
    this.decodeJWT();
  }
  logout() {
    this.tokenService.removeToken();
    this.userSubject.next({});
  }

  Logged() {
    return this.tokenService.ownsToken();
  }
}
