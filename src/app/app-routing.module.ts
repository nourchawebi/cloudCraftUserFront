import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AllTemplateFrontComponent} from "./FrontOffice/all-template-front/all-template-front.component";
import {AllTemplateBackComponent} from "./BackOffice/all-template-back/all-template-back.component";
import {LoginComponent} from "./FrontOffice/pages/login/login.component";
import {RegisterComponent} from "./FrontOffice/pages/register/register.component";
import {WelcomeComponent} from "./FrontOffice/pages/welcome/welcome.component";
import {adminAuthGuard, authGuard} from "./FrontOffice/services/auth/auth.guard";
import {HomeComponent} from "./FrontOffice/pages/home/home.component";
import {EditProfilePageComponent} from "./FrontOffice/pages/edit-profile-page/edit-profile-page.component";
import {ForgotPasswordComponent} from "./FrontOffice/pages/forgot-password/forgot-password.component";
import {ResetPasswordComponent} from "./FrontOffice/pages/reset-password/reset-password.component";
import {LockusersComponent} from "./BackOffice/user/lockusers/lockusers.component";
import {TestComponent} from "./test/test/test.component";
import {RegisterSimpleComponent} from "./FrontOffice/pages/register-simple/register-simple.component";
import {RegisterimgComponent} from "./FrontOffice/pages/registerimg/registerimg.component";
import {WebcameraComponent} from "./FrontOffice/pages/webcamera/webcamera.component";
import {UnothorizedComponent} from "./FrontOffice/pages/unothorized/unothorized.component";
import {UserstaticsComponent} from "./BackOffice/user/userstatics/userstatics.component";
import {CarGestionComponent} from "./FrontOffice/pages/car-gestion/car-gestion.component";
import {AddCarComponent} from "./FrontOffice/pages/car-gestion/add-car/add-car.component";
import {ListCarComponent} from "./FrontOffice/pages/car-gestion/list-car/list-car.component";
import {LocationComponent} from "./FrontOffice/pages/location/location.component";
import {JourneyComponent} from "./FrontOffice/pages/journey/journey.component";
import {ListJourneyComponent} from "./FrontOffice/pages/journey/list-journey/list-journey.component";


const routes: Routes = [


  { path:'login',
  component : LoginComponent},
  { path:'webcam',
    component : WebcameraComponent},
  { path:'register',
    component : RegisterComponent},
  { path:'registersimple',
    component : RegisterSimpleComponent},
  { path:'registerimg',
    component : RegisterimgComponent},

  {
    path:'home',
    component:HomeComponent,
    children:[
      { path: 'car_gestion', component:CarGestionComponent},
      { path: 'add_car', component:AddCarComponent},
      {path: 'cars', component:ListCarComponent},
      {path: 'location', component:LocationComponent},
      {path: 'add_journey', component: JourneyComponent},
      {path: 'list_journey', component: ListJourneyComponent},
    ]
  },

  {
    path:'test',
    component:TestComponent
  },
  {
    path:'profile',
    component:EditProfilePageComponent,
    canActivate:[authGuard]
  },
  {
    path:'unothorized',
    component:UnothorizedComponent,

  },
  { path:'forgotpassword',
    component:ForgotPasswordComponent

  },
  {
    path:'resetpassword',
    component:ResetPasswordComponent
  },
  {
    path: 'admin',
    component: AllTemplateBackComponent,
    children:[
      {
        path:'lockuser',
        component:LockusersComponent,

      } ,
      { path:'userstat',
        component : UserstaticsComponent,
        canActivate:[adminAuthGuard]
      },
    ]


  },
  {
    path: 'user',
    component: AllTemplateFrontComponent,
    children:[
      {
        path:'profile',
        component:EditProfilePageComponent,
        canActivate:[authGuard]
      },
      { path:'welcome',
        component : WelcomeComponent,


      },
    ]

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
