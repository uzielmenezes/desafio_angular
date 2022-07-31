import { AbstractControl } from '@angular/forms';
import { NewUserService } from './new-user.service';
import { Injectable } from '@angular/core';
import { first, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisteredUserService {
  constructor(private newUserService: NewUserService) {}

  userRegistered() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((userName) =>
          this.newUserService.checkRegisteredUser(userName)
        ),
        map((userRegistered) => (userRegistered ? { knownUser: true } : null)),
        first()
      );
    };
  }
}
