import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  // Login
  login() {
    // Ir al backend
    // Confirmar que el usuario exista
    // Un usuario

    this.authService.login().subscribe((res) => {
      console.log(res);

      // Si la respuesta trae un id, redireccionamos
      if (res.id) {
        this.router.navigate(['./heroes']);
      }
    });
  }
}
