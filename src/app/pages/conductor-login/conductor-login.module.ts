import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConductorLoginPage } from './conductor-login.page';

const routes: Routes = [
  {
    path: '',
    component: ConductorLoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConductorLoginPage]
})
export class ConductorLoginPageModule {}
