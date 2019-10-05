import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from "@angular/forms";
import timetable from '../../../models/timetable'
import {StafServiceService} from '../../../services/staf-service.service';

@Component({
  selector: 'app-add-timetable',
  templateUrl: './add-timetable.page.html',
  styleUrls: ['./add-timetable.page.scss'],
})
export class AddTimetablePage implements OnInit {

  public createtimetableForm: FormGroup;

  constructor(formbuilder: FormBuilder,
    public userService: StafServiceService,
    ) { 
    this.createtimetableForm = formbuilder.group({
      busnum: ['', Validators.required],
      from: ['', Validators.required],
      to:['',Validators.required],
      route_num: ['', Validators.required],
      date:['',Validators.required],
      time:['',Validators.required]
    
      
    });
  }

  ngOnInit() {
  }


  createTimetable(){
   const timetbl:timetable= {
    busnumber:this.createtimetableForm.value.busnum,
    from:this.createtimetableForm.value.from,
    to:this.createtimetableForm.value.to,
    date:this.createtimetableForm.value.date,
    time:this.createtimetableForm.value.time,
    routenum:this.createtimetableForm.value.route_num
    
   }
    this.userService.add_timeTable(timetbl);

  }
}
