import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditTimeTableModalPage } from './edit-time-table-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EditTimeTableModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditTimeTableModalPage]
})
export class EditTimeTableModalPageModule {}
