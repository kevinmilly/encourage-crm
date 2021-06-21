import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { Router } from '@angular/router';


import firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../models/users';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<any>;
  user: User = {} as User;
  private _firstTimeUser: boolean = false;

  constructor(
    public afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {
      this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {
          if(user) {
            this.user = user as User;
            console.dir(this.user);
            return this.firestore.doc<User>(`user/${user.uid}`).valueChanges();
          } else {
              return of(null);
          }
        })
      )

  }

 async googleSignin() {
   const provider = new firebase.auth.GoogleAuthProvider();
   const credential = await this.afAuth.signInWithPopup(provider);
   if(credential.additionalUserInfo?.isNewUser) {
     this._firstTimeUser = true;
   }
   return [this.updateUserData(credential.user),this.firstTimeUser];
 }

 private updateUserData(user:any) {
   const userRef: AngularFirestoreDocument<User> = this.firestore.doc(`user/${user.uid}`);
   const data = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL
   } as User
  return userRef.set(data, {merge: true});
         
  
}

get firstTimeUser() {return this._firstTimeUser}

 async signOut() {
   await this.afAuth.signOut();
   this.router.navigate(['/']);
 }



}