import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeAvecChauffeurPageRoutingModule } from './liste-avec-chauffeur-routing.module';

import { ListeAvecChauffeurPage } from './liste-avec-chauffeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeAvecChauffeurPageRoutingModule
  ],
  declarations: [ListeAvecChauffeurPage]
})
export class ListeAvecChauffeurPageModule {}
