import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import * as fromTask from './state/reducers/task.reducer';
import { TaskEffects } from './state/effects/task.effects';
import { TasksComponent } from './components/tasks/tasks.component';

@NgModule({
    declarations:[
    TasksComponent
  ],
    imports:[
        StoreModule.forFeature(fromTask.taskFeatureKey, fromTask.reducer), EffectsModule.forFeature([TaskEffects])
    ],
    exports:[]
})
export class TaskModule {

}