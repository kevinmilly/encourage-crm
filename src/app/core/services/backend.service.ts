import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '@core/auth/models/users';
import { AuthService } from '@core/auth/services/auth.service';

import { Contact, Communication, Note } from '@operations/index';
import { Observable, of } from 'rxjs';



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

  getContacts():Observable<Contact[]> {
    return this.firestore.collection<Contact>(`users/${this.user.uid}/Contacts`)
          .valueChanges();
  }

  getNotes():Observable<Note[]> {
    return this.firestore.collection<Note>(`users/${this.user.uid}/Notes`)
          .valueChanges();
  }

  getCommunications():Observable<Communication[]> {
    return this.firestore.collection<Communication>(`users/${this.user.uid}/Communications`)
          .valueChanges();
  }

  updateContact(contact:Contact) {
    return this.firestore.collection<Contact>(`users/${this.user.uid}/Contacts`)
            .doc(contact.id).update(contact);
  }

  updateCommunication(communication:Communication) {
       return this.firestore.collection<Communication>(`users/${this.user.uid}/Communications`)
          .doc(communication.id).update(communication);
  }

  updateNote(note:Note) {
       return this.firestore.collection<Note>(`users/${this.user.uid}/Notes`)
         .doc(note.id).update(note);
  }

  addContact(contact:Contact) {
    this.firestore.collection<Contact>(`users/${this.user.uid}/Contacts`)
              .doc(contact.id)
              .set(contact as Contact, { merge: true });
              return of(contact);
            
  }

  addNote(note:Note) {
      return this.firestore.collection<Note>(`users/${this.user.uid}/Notes`)
        .doc(note.id)
        .set(note as Note, { merge: true });
  }

  addCommunication(communication:Communication) {
    return this.firestore.collection<Communication>(`users/${this.user.uid}/Communications`)
        .doc(communication.id)
        .set(communication as Communication, { merge: true });
  }

  deleteContact(contact:Contact) {
    return this.firestore.collection<Contact>(`users/${this.user.uid}/Contacts`)
    .doc(contact.id).delete();
  }

  deleteNote(note:Note) {
    return this.firestore.collection<Note>(`users/${this.user.uid}/Notes`)
    .doc(note.id).delete();
  }


  deleteCommunication(communication:Contact) {
    return this.firestore.collection<Contact>(`users/${this.user.uid}/Contacts`)
    .doc(communication.id).delete();
  }




}
