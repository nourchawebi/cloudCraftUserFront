import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { CarGestionComponent } from './car-gestion/car-gestion.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddCarComponent } from './car-gestion/add-car/add-car.component';
import { MapComponent } from './map/map.component';
import { JourneyComponent } from './journey/journey.component';
import { ListJourneyComponent } from './journey/list-journey/list-journey.component';
import {DataService} from "./services/data.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocationComponent } from './location/location.component';
import { ListCarComponent } from './car-gestion/list-car/list-car.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    CarGestionComponent,
    AddCarComponent,
    MapComponent,
    JourneyComponent,
    ListJourneyComponent,
    LocationComponent,
    ListCarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
