import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '@core/auth/models/users';
import { AuthService } from '@core/auth/services/auth.service';

import { Contact, Communication, Note } from '@operations/index';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BackendService {

  user: User;

  constructor(
    private firestore: AngularFirestore,
    private auth: AuthService,

  ) {
    this.user = this.auth.user;
  }


  getItemsFromFirestore(type:string):Observable<Contact[]>|Observable<Note[]>|Observable<Communication[]> | null {
    switch (type) {
      case "notes":
        return this.firestore.collection<Note>(`users/${this.user.uid}/Notes`)
          .valueChanges();
      case "contacts":
        return this.firestore.collection<Contact>(`users/${this.user.uid}/Contacts`)
          .valueChanges();
      case "communications":
        return this.firestore.collection<Communication>(`users/${this.user.uid}/Communications`)
          .valueChanges();
      default:
        return null;
    }
  }

  updateTask(type:string, item:Note | Communication | Contact) {
    switch (type) {
      case "notes":
        const notesCollection = this.firestore.collection<Note>(`users/${this.user.uid}/Notes`);
        notesCollection.doc(item.id).update(item);
        break;
      case "contacts":
        const contactCollection = this.firestore.collection<Contact>(`users/${this.user.uid}/Contacts`);
        contactCollection.doc(item.id).update(item);
        break;
      case "communications":
        const commCollection = this.firestore.collection<Communication>(`users/${this.user.uid}/Communications`);
        commCollection.doc(item.id).update(item);
        break;
    }
  }

  addTask(type:string, item:(Note | Communication | Contact)) {
    switch (type) {
      case "notes":
        const noteAdded = this.firestore.collection<Note>(`users/${this.user.uid}/Notes`)
        .doc(item.id)
        .set(item as Note, { merge: true });
        break;
      case "contacts":
        const contactAdded = this.firestore.collection<Contact>(`users/${this.user.uid}/Contacts`)
        .doc(item.id)
        .set(item as Contact, { merge: true });
        break;
      case "communications":
        const commAdded = this.firestore.collection<Communication>(`users/${this.user.uid}/Communications`)
        .doc(item.id)
        .set(item as Communication, { merge: true });
        break;
    }
  }


  delete(type:string, item:(Note | Communication | Contact)) {
    switch (type) {
      case "notes":
      this.firestore.collection<Note>(`users/${this.user.uid}/Notes`)
        .doc(item.id).delete();
        break;
      case "contacts":
      this.firestore.collection<Contact>(`users/${this.user.uid}/Contacts`)
        .doc(item.id).delete();
        break;
      case "communications":
       this.firestore.collection<Communication>(`users/${this.user.uid}/Communications`)
        .doc(item.id).delete();
        break;
    }

  }



}
