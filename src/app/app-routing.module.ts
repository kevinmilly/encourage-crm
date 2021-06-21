import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren: () => import('./core/core.module').then(m => m.CoreModule),canActivate: [AuthGuard]},
  {path:'analytics', loadChildren: () => import('./analytics/analytics.module').then(m => m.AnalyticsModule), canActivate: [AuthGuard]},
  {path:'operations', loadChildren: () => import('./operations/operations.module').then(m => m.OperationsModule), canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
