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
  qrData: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.nombreUsuario = localStorage.getItem('email') || 'Email';
    console.log('Nombre de usuario recuperado:', this.nombreUsuario);
  }

  async startScan() {
    try {
      const options: CapacitorBarcodeScannerOptions = {
        hint: CapacitorBarcodeScannerTypeHint.QR_CODE, 
        cameraDirection: CapacitorBarcodeScannerCameraDirection.BACK, // Usamos la cámara trasera
        scanInstructions: "Escanee el código QR",
        scanButton: true,
        scanText: "Escanear", 
      };


      const result: CapacitorBarcodeScannerScanResult = await CapacitorBarcodeScanner.scanBarcode(options);

      // Verificar si el escaneo fue exitoso
      if (result && result.ScanResult) {
        this.qrData = result.ScanResult; // 
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


