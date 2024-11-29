import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenqrPageRoutingModule } from './genqr-routing.module';

import { GenqrPage } from './genqr.page';
import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenqrPageRoutingModule,
    QrCodeModule
  ],
  declarations: [GenqrPage]
})
export class GenqrPageModule {}
