import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperarpass',
  templateUrl: './recuperarpass.page.html',
  styleUrls: ['./recuperarpass.page.scss'],
})
export class RecuperarpassPage implements OnInit {

  email: string = '';
  verificationCode: string = '';
  oldPassword: string = 'contraseña123';  // Contraseña antigua simulada
  isCodeSent: boolean = false;
  isPasswordRevealed: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {}

  sendCode() {
    // Aquí deberías enviar el correo electrónico al backend
    console.log('Correo electrónico enviado a:', this.email);
    
    // Simulamos que el código ha sido enviado
    this.isCodeSent = true;
  }

  verifyCode() {
    // Aquí deberías verificar el código con el backend
    console.log('Código de verificación:', this.verificationCode);
    
    // Simulamos que el código es correcto y revelamos la contraseña antigua
    this.isPasswordRevealed = true;
  }

  goToLogin() {
    // Redirige al usuario a la página de login
    this.router.navigateByUrl('/login');
  }
}



