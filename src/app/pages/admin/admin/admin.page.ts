import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  pages = [
    {
      title: 'View TimeTable',
      url: '/admin/view-timetable',
      icon: 'md-eye'
    },
    {
      title:'Add TimeTable',
      url: '/admin/add-timetable',
      icon: 'md-time'
    },
    {
      title:'View Route',
      url: '/admin/view-route',
      icon: 'md-bus'
    },
    {
      title:'View Report',
      url: '/admin/view-report',
      icon: 'md-list'
    },


   
  ];
  selectedPath = "";

  constructor(private router:Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
   }

  ngOnInit() {
  }

}
