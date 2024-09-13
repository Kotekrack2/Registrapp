import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  email: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Obtén el correo electrónico de los parámetros de navegación
    this.route.queryParams.subscribe(params => {
      this.email = params['email'] || '';  // Usa el correo electrónico proporcionado o una cadena vacía si no está disponible
    });
  }
}

