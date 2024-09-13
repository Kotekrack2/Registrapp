import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  emailError: boolean = false;
  emailErrorMessage: string = '';

  passwordError: boolean = false;
  passwordErrorMessage: string = '';

  constructor(private router: Router) { }

  ngOnInit() {}

  onSubmit() {
    if (this.validateInputs()) {
      console.log('Email:', this.email);
      console.log('Password:', this.password);

      this.saveUsername(this.email);
      this.router.navigateByUrl('/inicio');
    }
  }

  validateInputs(): boolean {
    this.emailError = false;
    this.passwordError = false;

    if (!this.email) {
      this.emailError = true;
      this.emailErrorMessage = 'El correo es obligatorio.';
      return false;
    }

    if (!this.isValidEmail(this.email)) {
      this.emailError = true;
      this.emailErrorMessage = 'Por favor ingrese un correo válido.';
      return false;
    }

    if (!this.password) {
      this.passwordError = true;
      this.passwordErrorMessage = 'La contraseña es obligatoria.';
      return false;
    }

    return true;
  }

  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  recoverPassword() {
    this.router.navigateByUrl('/recuperarpass'); 
  }

  saveUsername(email: string) {
    localStorage.setItem('email', email);
    console.log('Nombre de usuario guardado en localStorage:', email);
  }
}