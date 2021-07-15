import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NoteList}

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