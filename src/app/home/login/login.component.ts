import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = '';
  password = '';

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.authentication(this.user, this.password)
    .subscribe(
      {
        next: () => {
        console.log('Autenticado com sucesso!!');
        },
        error: (err) => {
          alert('Usuário ou senha incorretos!!');
          console.log(err);
        }
      }
    );
  }

}
