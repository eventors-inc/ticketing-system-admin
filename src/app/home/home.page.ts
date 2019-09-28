import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import{Storage} from '@ionic/storage';
import{StafServiceService} from '../services/staf-service.service';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  public name:any;
  public user_email:any;




  barcodeScannerOptions: BarcodeScannerOptions;
  uid:any;
  constructor(
    public router:Router,
    private firestore: AngularFirestore,
    private storage:Storage,
    private firebaseService:StafServiceService,
    public barcodeScanner:BarcodeScanner
  ) {
    this.barcodeScannerOptions={
      showTorchButton:true,
      showFlipCameraButton:true
      
    }

  }
  
ngOnInit(){
  this.firebaseService.userChanges();
    
   // this.setTheValue();
    this.getTheValue();
}

getTheValue(){
    
  this.storage.get("users").then( (val) =>{
      if(val){ 
        this.name=val.name;
        
          this.user_email=val.email;
          //this.photo_URL=val.photoURL;
         console.log(this.name);
           }
  })

 }





  scanCode(){
    var x=true;
    this.barcodeScanner.scan(this.barcodeScannerOptions).then(data=>{
      this.uid=data;
      this.firestore.collection("users").ref.where("id","==",data.text).onSnapshot(snap=>{
        snap.forEach(ref=>{
          if(x){
            this.firestore.collection("users").doc(ref.id).update({isQrScanned:true});
            x=false;
          }
          
        })
      })
      
    }).catch(err =>{console.log(err);
    })
  }
 
}
