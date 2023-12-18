import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { CallCenterDashboardComponent } from './components/call-center-dashboard/call-center-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CreateTeamComponent } from './components/create-team/create-team.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { FooterComponent } from './components/footer/footer.component';
import { ViewOpenTicketsComponent } from './components/view-open-tickets/view-open-tickets.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CallCenterDashboardComponent,
    AdminDashboardComponent,
    NavbarComponent,
    HomepageComponent,
    CreateTeamComponent,
    CreateTicketComponent,
    FooterComponent,
    ViewOpenTicketsComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
