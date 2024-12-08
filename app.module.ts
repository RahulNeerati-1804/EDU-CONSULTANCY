import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component'; // Import AppComponent
import { LoginComponent } from './login/login.component'; // Import LoginComponent
import { RegisterComponent } from './register/register.component'; // Import RegisterComponent
import { DashboardComponent } from './dashboard/dashboard.component'; // Import DashboardComponent

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Add this to enable Reactive Forms
    LoginComponent, // Import LoginComponent
    RegisterComponent, // Import RegisterComponent
    DashboardComponent // Import DashboardComponent
  ],
  declarations: [
    // Remove AppComponent from here if it is standalone
  ],
  bootstrap: [AppComponent] // Keep this only if AppComponent is not standalone
})
export class AppModule { }
