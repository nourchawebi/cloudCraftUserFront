import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule, HttpParams} from "@angular/common/http";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatNativeDateModule} from "@angular/material/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatStepperModule} from "@angular/material/stepper";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import {DatePipe} from "@angular/common";
import {LoginComponent} from "./FrontOffice/pages/login/login.component";
import {RegisterComponent} from "./FrontOffice/pages/register/register.component";
import {WelcomeComponent} from "./FrontOffice/pages/welcome/welcome.component";
import {HomeComponent} from "./FrontOffice/pages/home/home.component";
import {EditProfilePageComponent} from "./FrontOffice/pages/edit-profile-page/edit-profile-page.component";
import {ForgotPasswordComponent} from "./FrontOffice/pages/forgot-password/forgot-password.component";
import {ResetPasswordComponent} from "./FrontOffice/pages/reset-password/reset-password.component";
import {AllTemplateBackComponent} from "./BackOffice/all-template-back/all-template-back.component";
import {FooterBackComponent} from "./BackOffice/footer-back/footer-back.component";
import {NavbarBackComponent} from "./BackOffice/navbar-back/navbar-back.component";
import {SidebarBackComponent} from "./BackOffice/sidebar-back/sidebar-back.component";
import {FooterFrontComponent} from "./FrontOffice/footer-front/footer-front.component";
import {HeaderFrontComponent} from "./FrontOffice/header-front/header-front.component";
import {AllTemplateFrontComponent} from "./FrontOffice/all-template-front/all-template-front.component";
import { LockusersComponent } from './BackOffice/user/lockusers/lockusers.component';
import { TestComponent } from './test/test/test.component';
import { RegisterSimpleComponent } from './FrontOffice/pages/register-simple/register-simple.component';
import { RegisterimgComponent } from './FrontOffice/pages/registerimg/registerimg.component';
import { WebcameraComponent } from './FrontOffice/pages/webcamera/webcamera.component';
import {WebcamModule} from "ngx-webcam";
import { UnothorizedComponent } from './FrontOffice/pages/unothorized/unothorized.component';
import { UserstaticsComponent } from './BackOffice/user/userstatics/userstatics.component';
import {BaseChartDirective, ChartsModule} from "ng2-charts";
import {CarGestionComponent} from "./FrontOffice/pages/car-gestion/car-gestion.component";
import {AddCarComponent} from "./FrontOffice/pages/car-gestion/add-car/add-car.component";
import {ListCarComponent} from "./FrontOffice/pages/car-gestion/list-car/list-car.component";
import {LocationComponent} from "./FrontOffice/pages/location/location.component";
import {MapComponent} from "./FrontOffice/pages/map/map.component";
import {ListJourneyComponent} from "./FrontOffice/pages/journey/list-journey/list-journey.component";
import {JourneyComponent} from "./FrontOffice/pages/journey/journey.component";
import { ParticipationsComponent } from './FrontOffice/pages/journey/list-journey/participations/participations.component';
//import {NgToastModule} from "ng-angular-popup";

const Validators = () => {

};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    HomeComponent,
    EditProfilePageComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    AllTemplateBackComponent,
    FooterBackComponent,
    NavbarBackComponent,
    SidebarBackComponent,
    AllTemplateFrontComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    LockusersComponent,
    TestComponent,
    RegisterSimpleComponent,
    RegisterimgComponent,
    WebcameraComponent,
    UnothorizedComponent,
    UserstaticsComponent,
    CarGestionComponent,
    AddCarComponent,
    ListCarComponent,
    LocationComponent,
    MapComponent,
    ListJourneyComponent,
    JourneyComponent,
    ParticipationsComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    WebcamModule,

   // NgToastModule

  ],
  providers: [HttpClient,HttpParams,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
