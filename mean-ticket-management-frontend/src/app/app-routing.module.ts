import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallCenterDashboardComponent } from './components/call-center-dashboard/call-center-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CreateTeamComponent } from './components/create-team/create-team.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { ViewOpenTicketsComponent } from './components/view-open-tickets/view-open-tickets.component';

const routes: Routes = [
  {component:CallCenterDashboardComponent,path:'call-center-dashboard'},
  {component:AdminDashboardComponent,path:'admin-dashboard'},
  {component:HomepageComponent,path:''},
  {component:CreateTeamComponent,path:'create-team'},
  {component:CreateTicketComponent,path:'create-ticket'},
  {component:ViewOpenTicketsComponent,path:'view-open-tickets'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
