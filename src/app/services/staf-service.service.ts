import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Observable, BehaviorSubject } from 'rxjs';
// import { Storage } from '@ionic/storage';

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
   // public storage: Storage
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
            // this.storage.set("users",this.userStatus);

            this.router.navigate(['/home']); //On success login, navigate to this page

            //this.successSignInToast(userRef.data().name); //welcome toast


          })
        })

      }).catch(err => {
        console.log(err.code);
      })



  }
}
