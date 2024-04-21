import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import {AllTemplateFrontComponent} from "./FrontOffice/all-template-front/all-template-front.component";
import {EventAdminComponent} from "./evenement/event-admin/event-admin.component";
import {EventComponent} from "./evenement/event/event.component";
import {CalendarComponent} from "./evenement/calendar/calendar.component";
import {AjouterEventComponent} from "./evenement/ajouter-event/ajouter-event.component";
import {UpdateEventComponent} from "./evenement/update-event/update-event.component";

const routes: Routes = [
  {

 path: 'admin',
 component: AllTemplateBackComponent,
    children : [
      {
        path : 'event-admin', component : EventAdminComponent
       // loadChildren : () => import('./evenement/event-admin/event-admin.component').then(m => m.EventAdminComponent)
      },
      {path : 'CreateEvent' , component : AjouterEventComponent},
      {path : 'updateEvent/:id' , component :UpdateEventComponent},

    ]
  },

  {
    path: 'user',
    component: AllTemplateFrontComponent,
    children : [
      {
      path:'event' , component : EventComponent
      },
      {path: 'calendar', component: CalendarComponent}
    ]

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
