import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ManageTimetablesPage } from './manage-timetables.page';

const routes: Routes = [
  {
    path: '',
    component: ManageTimetablesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManageTimetablesPage]
})
export class ManageTimetablesPageModule {}
