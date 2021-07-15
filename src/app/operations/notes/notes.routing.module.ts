import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddNoteComponent } from "./components/add-note/add-note.component";
import { NoteListComponent } from "./components/note-list/note-list.component";


const routes:Routes = [
    {path:'', component: NoteListComponent},
    {path:'note-list', component: NoteListComponent},
    {path:'note-add', component: AddNoteComponent}

]
 
@NgModule({
 imports:[RouterModule.forChild(routes)], 
 exports:[RouterModule],  
})
export class NotesRoutingModule {

}