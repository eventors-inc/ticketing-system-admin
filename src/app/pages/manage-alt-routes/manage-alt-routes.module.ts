import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ManageAltRoutesPage } from './manage-alt-routes.page';

const routes: Routes = [
  {
    path: '',
    component: ManageAltRoutesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManageAltRoutesPage]
})
export class ManageAltRoutesPageModule {}
