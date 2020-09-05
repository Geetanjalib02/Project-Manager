import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogTimeComponent } from './log-time/log-time.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:"", component:DashboardComponent },
  {path:"log-time", component: LogTimeComponent}    
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
