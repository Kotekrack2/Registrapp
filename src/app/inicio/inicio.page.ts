import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerOptions, CapacitorBarcodeScannerScanResult,CapacitorBarcodeScannerCameraDirection,CapacitorBarcodeScannerTypeHint} from '@capacitor/barcode-scanner';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  email: string = '';       
  nombreUsuario: string = '';  
  qrData: string | null = null; // Variable para almacenar datos del escaneo

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.nombreUsuario = localStorage.getItem('email') || 'Email';
    console.log('Nombre de usuario recuperado:', this.nombreUsuario);
  }

  async startScan() {
    try {
      // Configuración de las opciones de escaneo
      const options: CapacitorBarcodeScannerOptions = {
        hint: CapacitorBarcodeScannerTypeHint.QR_CODE, // Indicamos que solo escanearemos QR
        cameraDirection: CapacitorBarcodeScannerCameraDirection.BACK, // Usamos la cámara trasera
        scanInstructions: "Escanee el código QR",
        scanButton: true,
        scanText: "Escanear", // Texto que se muestra en el botón
      };

      // Iniciar el escaneo con las opciones definidas
      const result: CapacitorBarcodeScannerScanResult = await CapacitorBarcodeScanner.scanBarcode(options);

      // Verificar si el escaneo fue exitoso
      if (result && result.ScanResult) {
        this.qrData = result.ScanResult; // Guardamos el resultado del escaneo
        alert(`Código escaneado: ${this.qrData}`);
      } else {
        alert('No se detectó ningún código.');
      }
    } catch (error) {
      console.error('Error al escanear:', error);
      alert('Error al intentar escanear el código.');
    }
  }
}


