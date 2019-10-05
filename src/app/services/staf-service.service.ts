import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Observable, BehaviorSubject } from 'rxjs';
 import { Storage } from '@ionic/storage';
 import timetable from '.././models/timetable';
import { analytics } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class StafServiceService {


  constructor(private ngZone: NgZone,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router,
    public loadingCtrl: LoadingController,
    public alertController: AlertController,
    public toastController: ToastController,
    public storage: Storage
  ) { }

  public currentUser: any;
  public userStatus: string;
  public userStatusChanges: BehaviorSubject<string> = new BehaviorSubject<string>(this.userStatus);


  setUserStatus(userStatus: any): void {
    this.userStatus = userStatus;
    this.userStatusChanges.next(userStatus);
  }

  getUserStatus() {
    return this.currentUser;
  }

  async login(email: string, password: string) {

    const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password)   //check mail and password 
      .then((user) => {
        this.firestore.collection("users").ref.where("email", "==", user.user.email).onSnapshot(snap => {
          snap.forEach(userRef => {
            console.log("userRef", userRef.data().name);

            this.currentUser = userRef.data();
            this.setUserStatus(this.currentUser);  //setUserStatus
             this.storage.set("users",this.userStatus);

             if(userRef.data().role == "admin") {
              this.ngZone.run(() => this.router.navigate(["/admin"]));
              }else if(userRef.data().role=="co") {
               this.ngZone.run(() => this.router.navigate(["/home"])); 
              }else{
               this.ngZone.run(() => this.router.navigate(["/c-login"])); 
              }
              

          })
        })

      }).catch(err => {
        console.log(err.code);
      })



  }

  userChanges(){
    this.afAuth.auth.onAuthStateChanged(currentUser => {
      if(currentUser){
        this.firestore.collection("users").ref.where("id", "==", currentUser.uid).onSnapshot(snap =>{
          snap.forEach(userRef => {
            this.currentUser = userRef.data();
            //setUserStatus
            
            this.setUserStatus(this.currentUser);
             console.log(this.userStatus);
             this.storage.set("users",this.userStatus);
            
             if(userRef.data().role == "admin") {
             this.ngZone.run(() => this.router.navigate(["/admin"]));
             }else if(userRef.data().role=="co") {
              this.ngZone.run(() => this.router.navigate(["/home"])); 
             }else{
              this.ngZone.run(() => this.router.navigate(["/c-login"])); 
             }
          })
        })
      }else{
        //this is the error you where looking at the video that I wasn't able to fix
        //the function is running on refresh so its checking if the user is logged in or not
        //hence the redirect to the login
        this.ngZone.run(() => this.router.navigate(["/c-login"]));
      }
    })
  }


  // add time table 

  add_timeTable(times:timetable){

    this.afAuth.auth.onAuthStateChanged(currentUser => {
      if(currentUser){
        let time={
          busnumber:times.busnumber,
          from:times.from,
          to:times.to,
          date:times.date,
          time:times.time,
          routenum:times.routenum,
          Add_by:currentUser.uid
        }
        this.firestore.collection('Timetable/').add(time);

      }else{
        this.ngZone.run(() => this.router.navigate(["/c-login"]));
      }
    })
    
  }
      
  view_timetable():Observable<any> {
    return this.firestore.collection<any>( "Timetable" ).valueChanges ();
  }
  
  deleteTimetable(busnumber : string) {
    this.firestore.collection("Timetable").ref.where("busnumber", "==", busnumber).onSnapshot(snap => {
      snap.forEach(userRef => {
        this.firestore.collection("Timetable").doc(userRef.id).delete()
          

      });
    })
    console.log(this.userStatus);
    //On success login, navigate to this page
    // this.setUserStatus(this.currentUser);  //setUserStatus
    // this.storage.set("users",this.userStatus);
    // this.successSignInToast(this.currentUser.name); //welcome toast
    this.ngZone.run(() => this.router.navigate(["/admin/view-timetable"]));
    
  }

  updateTimetable(timeT:timetable){
    let timeTB = {

      // email: users.email,
      busnumber: timeT.busnumber,
      date:timeT.date,
      time:timeT.time,
      routenum:timeT.routenum,
      from:timeT.from,
      to:timeT.to


    }

    this.afAuth.auth.onAuthStateChanged(currentUser => {
      if (currentUser) {

        this.firestore.collection("Timetable").ref.where("busnumber", "==", timeTB.busnumber).onSnapshot(snap => {
          snap.forEach(userRef => {
            this.firestore.collection("Timetable").doc(userRef.id).update(timeTB)
              .then((user) => {
                

              }).catch(err => {
                console.log(err);
              })

          });
        })
        console.log(this.userStatus);
        //On success login, navigate to this page
        // this.setUserStatus(this.currentUser);  //setUserStatus
        // this.storage.set("users",this.userStatus);
        // this.successSignInToast(this.currentUser.name); //welcome toast
        this.ngZone.run(() => this.router.navigate(["/admin/view-timetable"]));

      } else {

        //the function is running on refresh so its checking if the user is logged in or not
        //hence the redirect to the login
        this.ngZone.run(() => this.router.navigate(["/c-login"]));
      }
    })


  }

}
