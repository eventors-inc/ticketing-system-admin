import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, Form } from '@angular/forms';
import { StafServiceService } from 'src/app/services/staf-service.service';
import { Router } from '@angular/router';
//import { Constants } from '../../constants/constants';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-c-login',
  templateUrl: './c-login.page.html',
  styleUrls: ['./c-login.page.scss'],
})
export class CLoginPage implements OnInit {
  public userLoginForm: FormGroup;

  constructor(
    public userService: StafServiceService,
    public router: Router,
    formBuilder: FormBuilder,
    public loadingCtrl: LoadingController
  ) {
    this.userLoginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),

    });
  }

  ngOnInit() {
  }


  userLogin(formData: FormData) {
    this.userService.login(formData["email"], formData["password"]);

  }




}
