import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule, HttpParams} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';

import { FooterBackComponent } from './BackOffice/footer-back/footer-back.component';
import { NavbarBackComponent } from './BackOffice/navbar-back/navbar-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { AddAnnonceComponent } from './FrontOffice/pages/annonce/add-annonce/add-annonce.component';
import { GetAnnonceComponent } from './FrontOffice/pages/annonce/get-annonce/get-annonce.component';
import { AddCommentComponent } from './FrontOffice/pages/comment/add-comment/add-comment.component';

import { NgxWheelModule } from 'ngx-wheel';
import { GetTargetAnnonceComponent } from './FrontOffice/pages/annonce/get-target-annonce/get-target-annonce.component';
import { GetAnnonceByIDUserComponent } from './FrontOffice/pages/annonce/get-annonce-by-iduser/get-annonce-by-iduser.component';
import { AddReactComponent } from './FrontOffice/pages/react/add-react/add-react.component';
import { AllAnnoncesComponent } from './BackOffice/annonce/all-annonces/all-annonces.component';
import { FindAnnonceByDateComponent } from './BackOffice/find-annonce-by-date/find-annonce-by-date.component';
import { StatsTop3AnnonceComponent } from './BackOffice/stats-top3-annonce/stats-top3-annonce.component';
import {ChartsModule} from "ng2-charts";

import { StatsCountTypeAnnonceComponent } from './BackOffice/stats-count-type-annonce/stats-count-type-annonce.component';
import { UpdateAnonnceComponent } from './FrontOffice/pages/annonce/update-anonnce/update-anonnce.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAnnonceComponent,
    GetAnnonceComponent,
    AppComponent,
   
    AllTemplateBackComponent,
    FooterBackComponent,
    NavbarBackComponent,
    SidebarBackComponent,
    AllTemplateFrontComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    AddCommentComponent,
   
  GetTargetAnnonceComponent,
      GetAnnonceByIDUserComponent,
      AddReactComponent,
      AllAnnoncesComponent,
      FindAnnonceByDateComponent,
      StatsTop3AnnonceComponent,
      StatsCountTypeAnnonceComponent,
      UpdateAnonnceComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ChartsModule,
   
   
  
   /* MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    
    MatProgressSpinnerModule,
    MatCardModule,*/
   
  
    
   
    
    ReactiveFormsModule
   
  ],
  providers: [HttpClient,HttpParams,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {constructor() {
  // Enregistrement des échelles
}}