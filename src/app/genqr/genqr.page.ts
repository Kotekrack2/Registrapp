import { Component } from '@angular/core';

@Component({
  selector: 'app-genqr',
  templateUrl: './genqr.page.html',
  styleUrls: ['./genqr.page.scss'],
})
export class GenqrPage {
  textQR: string = '';

  
  generarQR() {
    if (this.textQR) {
      // 
      console.log('Generando QR para:', this.textQR);
    } else {
      console.log('No se ha ingresado texto para generar el QR');
    }
  }
}
