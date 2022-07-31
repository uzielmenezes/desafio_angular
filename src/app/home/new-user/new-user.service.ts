import { NewUser } from './../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private httpClient: HttpClient) {}

  registerNewUser(newUser: NewUser) {
    return this.httpClient.post('http://localhost:3000/user/signup', newUser);
  }
}
