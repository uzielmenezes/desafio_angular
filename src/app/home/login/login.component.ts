import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = '';
  password = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.authentication(this.user, this.password).subscribe({
      next: () => {
        this.router.navigate(['userpage']);
      },
      error: (err) => {
        alert('Usuário ou senha incorretos!!');
        console.log(err);
      },
    });
  }
}
