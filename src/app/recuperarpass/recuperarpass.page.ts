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
  oldPassword: string = 'contraseña123';  
  isCodeSent: boolean = false;
  isPasswordRevealed: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {}

  sendCode() {
   
    console.log('Correo electrónico enviado a:', this.email);
    
    this.isCodeSent = true;
  }

  verifyCode() {
    console.log('Código de verificación:', this.verificationCode);
    
    this.isPasswordRevealed = true;
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }
}



