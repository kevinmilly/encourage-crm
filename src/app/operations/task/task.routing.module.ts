import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddTaskComponent } from "./components/add-task/add-task.component";
import { TasksComponent } from "./components/tasks/tasks.component";



const routes:Routes = [
    {path:'', component:TasksComponent},
    {path:'task-list', component:TasksComponent},
    {path:'task-add', component:AddTaskComponent}

]



@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class TaskRoutingModule {} 