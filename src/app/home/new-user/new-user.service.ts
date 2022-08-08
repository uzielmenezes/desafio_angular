import { NewUser } from '../../models/new-user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private httpClient: HttpClient) {}

  registerNewUser(newUser: NewUser) {
    return this.httpClient.post(`${API}/user/signup`, newUser);
  }
  checkRegisteredUser(userName: string) {
    return this.httpClient.get(`${API}/user/exists/${userName}`);
  }
}
