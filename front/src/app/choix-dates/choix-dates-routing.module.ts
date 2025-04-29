import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoixDatesPage } from './choix-dates.page';

const routes: Routes = [
  {
    path: '',
    component: ChoixDatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoixDatesPageRoutingModule {}
