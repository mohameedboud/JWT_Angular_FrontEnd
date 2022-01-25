import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTasksComponent } from './new-tasks/new-tasks.component';
import { RegistrationComponent } from './registration/registration.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthenticationService} from "../service/authentication.service";

const approutes:Routes=[
  {path:"login", component:LoginComponent},
  {path:"tasks", component:TasksComponent},
  {path:"new-task", component:NewTasksComponent},
  {path:"register", component:RegistrationComponent},
  {path:"", redirectTo:"login", pathMatch:"full"}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksComponent,
    NewTasksComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(approutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
