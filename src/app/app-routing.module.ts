import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import {AllTemplateFrontComponent} from "./FrontOffice/all-template-front/all-template-front.component";
import {EventAdminComponent} from "./evenement/event-admin/event-admin.component";
import {EventComponent} from "./evenement/event/event.component";
import {CalendarComponent} from "./evenement/calendar/calendar.component";
import {AjouterEventComponent} from "./evenement/ajouter-event/ajouter-event.component";
import {UpdateEventComponent} from "./evenement/update-event/update-event.component";
import {TesteComponent} from "./evenement/teste/teste.component";
import {ChatComponent} from "./evenement/chat/chat.component";
import {EventDetailsComponent} from "./evenement/event-details/event-details.component";

const routes: Routes = [ { path: '', pathMatch: 'full', redirectTo: 'user' },
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
      {path:'event' , component : EventComponent},
      {path: 'calendar', component: CalendarComponent},
      { path: 'event-detail/:id', component: EventDetailsComponent }

    ]

  },
  {path:'teste' , component : TesteComponent},
  {path:'chat', component: ChatComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
