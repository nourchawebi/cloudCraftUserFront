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
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
   
   
  
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
export class AppModule { }
