import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children:[
      { path: 'view-timetable', 
      loadChildren: '../view-timetable/view-timetable.module#ViewTimetablePageModule'
     },
     { path: 'add-timetable', 
     loadChildren: '../add-timetable/add-timetable.module#AddTimetablePageModule'  
     },
     { path: 'view-route',
      loadChildren: '../view-route/view-route.module#ViewRoutePageModule'
     },
     { path: 'view-report', 
     loadChildren: '../view-report/view-report.module#ViewReportPageModule'
     },
     {
      path :'',
      redirectTo:'/admin/view-timetable'
    }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminPage]
})
export class AdminPageModule {}
