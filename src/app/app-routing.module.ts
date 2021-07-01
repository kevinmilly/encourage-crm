import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/auth/guards/auth.guard';
import { LoginComponent } from '@core/auth/login/login.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./operations/contacts/contacts.module').then(m => m.ContactsModule), canActivate: [AuthGuard] },
  { path: 'login', component:LoginComponent },
  { path: 'analytics', loadChildren: () => import('./analytics/analytics.module').then(m => m.AnalyticsModule), canActivate: [AuthGuard] },
  { path: 'contacts', loadChildren: () => import('./operations/contacts/contacts.module').then(m => m.ContactsModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
