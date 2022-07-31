import { Router } from '@angular/router';
import { NewUser } from './../../models/usuario.model';
import { NewUserService } from './new-user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from './lowerCase.validator';
import { RegisteredUserService } from './registered-user.service';
import { userPassEqualValidator } from './user-password-equal.validator';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private registeredUserService: RegisteredUserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group(
      {
        userName: [
          '',
          [Validators.required, lowerCaseValidator],
          [this.registeredUserService.userRegistered()],
        ],
        fullName: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.email]],
        password: [''],
      },
      {
        validators: [userPassEqualValidator],
      }
    );
  }

  register() {
    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as NewUser;
      this.newUserService.registerNewUser(newUser).subscribe({
        next: () => {
          this.router.navigate(['']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
