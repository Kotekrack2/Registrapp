import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  email: string = '';       
  nombreUsuario: string = '';  

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.nombreUsuario = localStorage.getItem('email') || 'Email';

    
    console.log('Nombre de usuario recuperado:', this.nombreUsuario);
  }
}
