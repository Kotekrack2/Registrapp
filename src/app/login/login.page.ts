import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';  // Inicializar como cadena vacía
  password: string = '';  // Inicializar como cadena vacía

  constructor(private router: Router) { }

  ngOnInit() {}

  onSubmit() {
    // Aquí puedes añadir la lógica para autenticar al usuario.
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    
    // Redirige a la página principal (inicio) si la autenticación es exitosa.
    // Por ahora solo redirigimos a la vista de inicio.
    this.router.navigateByUrl('/inicio');
  }

  recoverPassword() {
    // Redirige a la vista de recuperación de contraseña
    this.router.navigateByUrl('/recuperarpass'); // Cambia '/recuperarpass' a la ruta de tu vista de recuperación de contraseña
  }
}

