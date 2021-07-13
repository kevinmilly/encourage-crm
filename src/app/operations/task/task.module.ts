import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import * as fromTask from './state/reducers/task.reducer';
import { TaskEffects } from './state/effects/task.effects';
import { TasksComponent } from './components/tasks/tasks.component';
import { SharedModule } from "@shared/shared.module";
import { TaskRoutingModule } from "./task.routing.module";
import { TaskDetailComponent } from "./components/task-detail/task-detail.component";
import { AddTaskComponent } from "./components/add-task/add-task.component";

@NgModule({
    declarations:[
    TasksComponent,
    TaskDetailComponent,
    AddTaskComponent
  ],
    imports:[
        StoreModule.forFeature(fromTask.taskFeatureKey, fromTask.taskReducer), EffectsModule.forFeature([TaskEffects]),
        SharedModule,
        TaskRoutingModule
    ],
    exports:[],
    entryComponents:[TaskDetailComponent]
})
export class TaskModule {

}