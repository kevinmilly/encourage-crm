import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '@core/auth/services/auth.service';

import { Contact, Note, Task} from '@operations/index';
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

  




  getTasks(): Observable<Task[]> {
   
    return this.firestore.collection<Task>(`user/${this.auth.user.uid}/Tasks`)
      .valueChanges();
  }
  updateTask(task: Task) {
    this.firestore.collection<Task>(`user/${this.auth.user.uid}/Tasks`)
      .doc(task.id).update(task);
    return of({ ...task })
  }
  addTask(task: Task) {
    const taskToSubmit = { ...task };
    taskToSubmit['id'] = this.idGenerator();
    console.dir(taskToSubmit);

    this.firestore.collection<Task>(`user/${this.auth.user.uid}/Tasks`)
      .doc(taskToSubmit.id)
      .set(taskToSubmit as Task, { merge: true });
    return of(taskToSubmit);

  }
  deleteTask(task: Task) {
    this.firestore.collection<Task>(`user/${this.auth.user.uid}/Tasks`)
      .doc(task.id).delete();
    return of({ ...task })
  }





  getNotes(): Observable<Note[]> {
   
    return this.firestore.collection<Note>(`user/${this.auth.user.uid}/Notes`)
      .valueChanges();
  }
  updateNote(task: Note) {
    this.firestore.collection<Note>(`user/${this.auth.user.uid}/Notes`)
      .doc(task.id).update(task);
    return of({ ...task })
  }
  addNote(task: Note) {
    const taskToSubmit = { ...task };
    taskToSubmit['id'] = this.idGenerator();
    console.dir(taskToSubmit);

    this.firestore.collection<Note>(`user/${this.auth.user.uid}/Notes`)
      .doc(taskToSubmit.id)
      .set(taskToSubmit as Note, { merge: true });
    return of(taskToSubmit);

  }
  deleteNote(task: Note) {
    this.firestore.collection<Note>(`user/${this.auth.user.uid}/Tasks`)
      .doc(task.id).delete();
    return of({ ...task })
  }


  idGenerator() {
    var gen = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (gen() + gen() + "-" + gen() + "-" + gen() + "-" + gen() + "-" + gen() + gen() + gen());
  }


}
