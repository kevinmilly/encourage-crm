import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddContactComponent } from "./components/add-contact/add-contact.component";
import { ContactListComponent } from "./components/contact-list/contact-list.component";


const routes:Routes = [
    {path:'', component:ContactListComponent},
    {path:'contact-list', component:ContactListComponent},
    {path:'contact-add', component:AddContactComponent}

]



@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ContactRoutingModule {} 