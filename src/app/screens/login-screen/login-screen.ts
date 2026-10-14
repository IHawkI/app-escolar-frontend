import { Component, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SHARED_IMPORTS } from '../../shared/shared.import';

@Component({
  selector: 'app-login-screen',
  imports: [SHARED_IMPORTS],
  templateUrl: './login-screen.html',
  styleUrl: './login-screen.scss'
})
export class LoginScreen {
  // Inyección del servicio de cookies
  private cookies = inject(CookieService);

  constructor() {
    // Ejemplo de uso: guardar y leer una cookie de prueba
    this.cookies.set('sesion', 'valor');
    const valor = this.cookies.get('sesion');
  }
}