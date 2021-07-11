import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '@core/auth/services/auth.service';

import { Contact, Communication, Note } from '@operations/index';
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

  getNotesByContact(): Observable<Note[]> { 
    console.log(`in notes backend`);
    return this.firestore.collection<Note>(`user/${this.auth.user.uid}/Notes`)
      .valueChanges()
      // .pipe(map(notes => notes.filter(note => note.contact_id === contactId)));
  }

  getCommunications(): Observable<Communication[]> {
    return this.firestore.collection<Communication>(`user/${this.auth.user.uid}/Communications`)
      .valueChanges();
  }

  updateContact(contact: Contact) {
    this.firestore.collection<Contact>(`user/${this.auth.user.uid}/Contacts`)
      .doc(contact.id).update(contact);
    return of({ ...contact })
  }

  updateCommunication(communication: Communication) {
    return this.firestore.collection<Communication>(`user/${this.auth.user.uid}/Communications`)
      .doc(communication.id).update(communication);
  }

  updateNote(note: Note) {
    this.firestore.collection<Note>(`user/${this.auth.user.uid}/Notes`)
      .doc(note.id).update(note);
    return of({ ...note });
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

  addNote(note: Note) {
    this.firestore.collection<Note>(`user/${this.auth.user.uid}/Notes`)
      .doc(note.id)
      .set(note as Note, { merge: true });
    return of({ ...note });
  }

  addCommunication(communication: Communication) {
    return this.firestore.collection<Communication>(`user/${this.auth.user.uid}/Communications`)
      .doc(communication.id)
      .set(communication as Communication, { merge: true });
  }

  deleteContact(contact: Contact) {
    this.firestore.collection<Contact>(`user/${this.auth.user.uid}/Contacts`)
      .doc(contact.id).delete();
    return of({ ...contact })
  }

  deleteNote(note: Note) {
    this.firestore.collection<Note>(`user/${this.auth.user.uid}/Notes`)
      .doc(note.id).delete();
    return of({ ...note })
  }

  deleteCommunication(communication: Contact) {
    return this.firestore.collection<Contact>(`user/${this.auth.user.uid}/Contacts`)
      .doc(communication.id).delete();
  }

  idGenerator() {
    var gen = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (gen() + gen() + "-" + gen() + "-" + gen() + "-" + gen() + "-" + gen() + gen() + gen());
  }


}
