import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
  ) {}

  async openScanner(): Promise<void> {
    // Solicitar permisos de cámara
    const hasPermission = await this.requestCameraPermission();
    if (!hasPermission) {
      this.showPermissionAlert();
      return;
    }

    const modal = await this.modalController.create({
      component: BarcodeScanningModalComponent,
      componentProps: {
        formats: ['QR_CODE', 'EAN_13'],
        lensFacing: 'back', // Lente trasera
      },
      cssClass: 'barcode-scanning-modal',
    });

    modal.onDidDismiss().then(async (result) => {
      if (result.data && result.data.barcode) {
        const scannedText = result.data.barcode.rawValue;
        console.log('Código escaneado:', scannedText);
        await this.showScannedCodeAlert(scannedText);
      }
    });

    await modal.present();
  }


  private async requestCameraPermission(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }


  private async showPermissionAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permiso denegado',
      message: 'Se necesita el permiso de cámara para usar el escáner de códigos.',
      buttons: ['OK'],
    });
    await alert.present();
  }

 
  private async showScannedCodeAlert(scannedText: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Código Escaneado',
      message: scannedText || 'No se pudo leer el código.',
      buttons: ['OK'],
    });
    await alert.present();
  }

}

