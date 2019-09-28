import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ManagePassengersPage } from './manage-passengers.page';

const routes: Routes = [
  {
    path: '',
    component: ManagePassengersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManagePassengersPage]
})
export class ManagePassengersPageModule {}
