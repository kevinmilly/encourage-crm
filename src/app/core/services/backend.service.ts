import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '@core/auth/services/auth.service';

import { Contact, Note, Task } from '@operations/index';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BackendService {



  constructor(
    private firestore: AngularFirestore,
    private auth: AuthService,

  ) {

  }

  getContactsFromDB(): Observable<Contact[]> {
    return this.firestore.collection<Contact>(`user/${this.auth.user.uid}/Contacts`)
      .valueChanges();
  }
  updateContactInDB(contactId:string | number, changes: Partial<Contact>) {
    this.firestore.collection<Contact>(`user/${this.auth.user.uid}/Contacts`)
      .doc(`${contactId}`).update(changes);
    return of({ ...changes })
  }
  addContactToDB(contact: Contact) {
    const contactToSubmit = { ...contact };
    contactToSubmit['id'] = this.idGenerator();
    console.dir(contactToSubmit);

    this.firestore.collection<Contact>(`user/${this.auth.user.uid}/Contacts`)
      .doc(contactToSubmit.id)
      .set(contactToSubmit as Contact, { merge: true });
    return of(contactToSubmit);

  }
  deleteContactInDB(contact: Contact) {
    this.firestore.collection<Contact>(`user/${this.auth.user.uid}/Contacts`)
      .doc(contact.id).delete();
    return of({ ...contact })
  }






  getTasksFromDB(): Observable<Task[]> {

    return this.firestore.collection<Task>(`user/${this.auth.user.uid}/Tasks`)
      .valueChanges();
  }
  updateTaskInDB(task: Task) {
    this.firestore.collection<Task>(`user/${this.auth.user.uid}/Tasks`)
      .doc(task.id).update(task);
    return of({ ...task })
  }
  addTaskInDB(task: Task) {
    const taskToSubmit = { ...task };
    taskToSubmit['id'] = this.idGenerator();
    console.dir(taskToSubmit);

    this.firestore.collection<Task>(`user/${this.auth.user.uid}/Tasks`)
      .doc(taskToSubmit.id)
      .set(taskToSubmit as Task, { merge: true });
    return of(taskToSubmit);

  }
  deleteTaskInDB(task: Task) {
    this.firestore.collection<Task>(`user/${this.auth.user.uid}/Tasks`)
      .doc(task.id).delete();
    return of({ ...task })
  }





  getNotesFromDB(): Observable<Note[]> {

    return this.firestore.collection<Note>(`user/${this.auth.user.uid}/Notes`)
      .valueChanges();
  }
  updateNoteInDB(note: Note) {
    this.firestore.collection<Note>(`user/${this.auth.user.uid}/Notes`)
      .doc(note.id).update(note);
    return of({ ...note })
  }
  addNoteInDB(note: Note) {
    const noteToSubmit = { ...note };
    noteToSubmit['id'] = this.idGenerator();
    console.dir(noteToSubmit);

    this.firestore.collection<Note>(`user/${this.auth.user.uid}/Notes`)
      .doc(noteToSubmit.id)
      .set(noteToSubmit as Note, { merge: true });
    return of(noteToSubmit);

  }
  deleteNoteInDB(note: Note) {
    this.firestore.collection<Note>(`user/${this.auth.user.uid}/Notes`)
      .doc(note.id).delete();
    return of({ ...note })
  }


  idGenerator() {
    var gen = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (gen() + gen() + "-" + gen() + "-" + gen() + "-" + gen() + "-" + gen() + gen() + gen());
  }


}
