import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoixDatesPageRoutingModule } from './choix-dates-routing.module';

import { ChoixDatesPage } from './choix-dates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoixDatesPageRoutingModule
  ],
  declarations: [ChoixDatesPage]
})
export class ChoixDatesPageModule {}
