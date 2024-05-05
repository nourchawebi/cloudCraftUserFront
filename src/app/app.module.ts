import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { FooterBackComponent } from './BackOffice/footer-back/footer-back.component';
import { NavbarBackComponent } from './BackOffice/navbar-back/navbar-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { EventAdminComponent } from './evenement/event-admin/event-admin.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { EventComponent } from './evenement/event/event.component';
import { CalendarComponent } from './evenement/calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AjouterEventComponent } from './evenement/ajouter-event/ajouter-event.component';
import { UpdateEventComponent } from './evenement/update-event/update-event.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TesteComponent } from './evenement/teste/teste.component';
import { QRCodeModule } from 'angularx-qrcode';

import { ChatComponent } from './evenement/chat/chat.component';
import {ChatService} from "./service/chat.service";
import { EventDetailsComponent } from './evenement/event-details/event-details.component';
import { ChartEventComponent } from './evenement/chart-event/chart-event.component';
import {ChartsModule} from "ng2-charts";



@NgModule({
  declarations: [
    AppComponent,
    AllTemplateBackComponent,
    FooterBackComponent,
    NavbarBackComponent,
    SidebarBackComponent,
    AllTemplateFrontComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    EventAdminComponent,
    EventComponent,
    CalendarComponent,
    AjouterEventComponent,
    UpdateEventComponent,
    TesteComponent,
    ChatComponent,
    EventDetailsComponent,
    ChartEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    QRCodeModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgbModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
