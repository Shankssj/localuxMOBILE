import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeAvecChauffeurPage } from './liste-avec-chauffeur.page';

const routes: Routes = [
  {
    path: '',
    component: ListeAvecChauffeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeAvecChauffeurPageRoutingModule {}
