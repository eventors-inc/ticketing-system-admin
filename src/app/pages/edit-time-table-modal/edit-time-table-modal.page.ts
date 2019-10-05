import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, Form } from "@angular/forms";
import timetable from '../../models/timetable'
import {StafServiceService} from '../../services/staf-service.service';

@Component({
  selector: 'app-edit-time-table-modal',
  templateUrl: './edit-time-table-modal.page.html',
  styleUrls: ['./edit-time-table-modal.page.scss'],
})
export class EditTimeTableModalPage implements OnInit {
  isUpdate:boolean=false;
  timeTab:any;
  public createtimetableForm: FormGroup;
  public busnums:any;
  public from_t:any;
  public to_t:any;
  public date:any;
  public route:any;
  public time_t:any;
  public UID:any;


  constructor(public navParams: NavParams,
    private modalController: ModalController,
    formbuilder: FormBuilder,
    public userService: StafServiceService,
    ) {
      this.createtimetableForm = formbuilder.group({
        
        from: ['', Validators.required],
        to:['',Validators.required],
        route_num: ['', Validators.required],
        date:['',Validators.required],
        time:['',Validators.required],
        busnumber:['',]
        
      });
    

    
   }

  ngOnInit() {
    this.timeTab=this.navParams.get('timetable');

    //console.log(this.timeTab)

   this.getdate()
  }

 getdate(){
   this.UID=this.timeTab.Add_by
  this.busnums=this.timeTab.busnumber;
  this.from_t=this.timeTab.from;
  this.to_t=this.timeTab.to;
  this.date=this.timeTab.date;
  this.time_t=this.timeTab.time;
  this.route=this.timeTab.routenum;

  //console.log(this.busnums);
 }
  
   updateTimetable(){
   const timet:timetable={
    busnumber:this.busnums,
    from:this.createtimetableForm.value.from,
    to:this.createtimetableForm.value.to,
    date:this.createtimetableForm.value.date,
    time:this.createtimetableForm.value.time,
    routenum:this.createtimetableForm.value.route_num
   }
   this.userService.updateTimetable(timet);
  this.modalController.dismiss();
 }
  
 deleteTimetable(item){
   console.log("deleted "+item);
   
 }

}
