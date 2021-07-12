import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import * as fromTask from './state/reducers/task.reducer';
import { TaskEffects } from './state/effects/task.effects';
import { TasksComponent } from './components/tasks/tasks.component';
import { SharedModule } from "@shared/shared.module";

@NgModule({
    declarations:[
    TasksComponent
  ],
    imports:[
        StoreModule.forFeature(fromTask.taskFeatureKey, fromTask.reducer), EffectsModule.forFeature([TaskEffects]),
        SharedModule
    ],
    exports:[]
})
export class TaskModule {

}