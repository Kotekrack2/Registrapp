import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  exploreMore() {
    // Aquí puedes definir la lógica para la acción del botón
    // Por ejemplo, redirigir a otra página
    this.router.navigateByUrl('/login'); // Cambia '/explore' a la ruta de la página que quieras redirigir
  }
}
