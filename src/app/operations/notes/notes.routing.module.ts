import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import * as fromNotes from './index';



const routes:Routes = [
    {path:'', component:fromNotes.NotesListComponent},
    {path:'contact-list', component:fromNotes.NotesListComponent}
]



@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class NotesRoutingModule {}