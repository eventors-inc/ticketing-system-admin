import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditTimeTableModalPage } from '../../edit-time-table-modal/edit-time-table-modal.page';
import {StafServiceService} from '../../../services/staf-service.service';

@Component({
  selector: 'app-view-route',
  templateUrl: './view-route.page.html',
  styleUrls: ['./view-route.page.scss'],
})
export class ViewRoutePage implements OnInit {

  userDetails:any;
  userdetailsClient:boolean=false;
  constructor(
    public userService: StafServiceService,
    public modalController:ModalController
  ) {
    this.userdetailsClient=true;
    this.userService.view_userdetails().subscribe((data:any[])=>{
      this.userDetails=data;
    
       
  });

   }

  ngOnInit() {
  }

}
