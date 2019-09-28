import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  barcodeScannerOptions: BarcodeScannerOptions;
  uid:any;
  constructor(
    public router:Router,
    private firestore: AngularFirestore,
    public barcodeScanner:BarcodeScanner
  ) {
    this.barcodeScannerOptions={
      showTorchButton:true,
      showFlipCameraButton:true
      
    }

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
