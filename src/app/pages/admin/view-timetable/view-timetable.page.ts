import { Component, OnInit } from '@angular/core';
import {StafServiceService} from '../../../services/staf-service.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { ModalController } from '@ionic/angular';
import { EditTimeTableModalPage } from '../../edit-time-table-modal/edit-time-table-modal.page';

@Component({
  selector: 'app-view-timetable',
  templateUrl: './view-timetable.page.html',
  styleUrls: ['./view-timetable.page.scss'],
})
export class ViewTimetablePage implements OnInit {

  timeTable:any;
  timeTableClient:boolean=false;
  constructor(
    public storage: Storage,
    public userService: StafServiceService,
    public firestore :AngularFirestore,
    public router:Router,
    public modalController:ModalController
  ) {
    this.timeTableClient=true;

    this.userService.view_timetable().subscribe((data:any[])=>{
      
     
      this.timeTable=data;
      console.log();
       
  });
   }

  ngOnInit() {
    //this.userService.view_timetable()
   

    //this.gettimeTable();
  }

  async editTimeTable(item){
   //this.router.navigate(['/edit-time-table-modal']) 
   const modal=await this.modalController.create({
     component:EditTimeTableModalPage,

     componentProps:{
      'timetable':item,
    }
    
    
   })
   
   return await modal.present();
  }
  
  deleteTimetable(item){
    this.userService.deleteTimetable(item.busnumber)

  }
  
}
