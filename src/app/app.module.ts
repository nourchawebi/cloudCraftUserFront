import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import {HttpClient, HttpClientModule, HttpParams} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './pages/home/home.component';
import { EditProfilePageComponent } from './pages/edit-profile-page/edit-profile-page.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
//import {NgToastModule} from "ng-angular-popup";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    HomeComponent,
    EditProfilePageComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

   // NgToastModule

  ],
  providers: [HttpClient,HttpParams],
  bootstrap: [AppComponent]
})
export class AppModule { }
