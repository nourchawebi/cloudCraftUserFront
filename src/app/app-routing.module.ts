import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarGestionComponent} from "./car-gestion/car-gestion.component";
import {AddCarComponent} from "./car-gestion/add-car/add-car.component";
import {MapComponent} from "./map/map.component";
import {JourneyComponent} from "./journey/journey.component";
import {ListJourneyComponent} from "./journey/list-journey/list-journey.component";
import {LocationComponent} from "./location/location.component";

const routes: Routes = [
  { path: 'car_gestion', component:CarGestionComponent},
  { path: 'add_car', component:AddCarComponent},
  {path: 'map', component: MapComponent},
  {path: 'add_journey', component: JourneyComponent},
  {path: 'location', component: LocationComponent},
  {path: 'list_journey', component: ListJourneyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
