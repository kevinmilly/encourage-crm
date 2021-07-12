import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '@core/auth/services/auth.service';

import { Contact, Communication} from '@operations/index';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class BackendService {



  constructor(
    private firestore: AngularFirestore,
    private auth: AuthService,

  ) {

  }

  getContacts(): Observable<Contact[]> {
    return this.firestore.collection<Contact>(`user/${this.auth.user.uid}/Contacts`)
      .valueChanges();
  }


  updateContact(contact: Contact) {
    this.firestore.collection<Contact>(`user/${this.auth.user.uid}/Contacts`)
      .doc(contact.id).update(contact);
    return of({ ...contact })
  }


  addContact(contact: Contact) {
    const contactToSubmit = { ...contact };
    contactToSubmit['id'] = this.idGenerator();
    console.dir(contactToSubmit);

    this.firestore.collection<Contact>(`user/${this.auth.user.uid}/Contacts`)
      .doc(contactToSubmit.id)
      .set(contactToSubmit as Contact, { merge: true });
    return of(contactToSubmit);

  }


  deleteContact(contact: Contact) {
    this.firestore.collection<Contact>(`user/${this.auth.user.uid}/Contacts`)
      .doc(contact.id).delete();
    return of({ ...contact })
  }


  idGenerator() {
    var gen = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (gen() + gen() + "-" + gen() + "-" + gen() + "-" + gen() + "-" + gen() + gen() + gen());
  }


}
