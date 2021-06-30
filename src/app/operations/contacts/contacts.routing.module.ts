import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import * as fromConcepts from './index';


const routes:Routes = [
    {path:'', component:fromConcepts.ContactListComponent},
    {path:'contact-list', component:fromConcepts.ContactListComponent},
    {path:'contact-flow', component:fromConcepts.ContactKanbanComponent},
    {path:'contact-add', component:fromConcepts.AddContactComponent},

]



@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ContactRoutingModule {}