import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationListComponent } from './communications/components/communication-list/communication-list.component';
import { ContactKanbanComponent } from './contacts/components/contact-kanban/contact-kanban.component';
import { ContactListComponent } from './contacts/components/contact-list/contact-list.component';
import { NotesComponent } from './notes/components/notes/notes.component';


const routes: Routes = [
  {path:'', component:ContactListComponent},
  {path:'contact-list', component:ContactListComponent},
  {path:'contact-flow', component:ContactKanbanComponent},
  {path:'contact-notes', component:NotesComponent},
  {path:'messages', component:CommunicationListComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
