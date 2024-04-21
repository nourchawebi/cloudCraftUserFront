import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AllTemplateFrontComponent} from "./FrontOffice/all-template-front/all-template-front.component";
import {AllTemplateBackComponent} from "./BackOffice/all-template-back/all-template-back.component";
import {LoginComponent} from "./FrontOffice/pages/login/login.component";
import {RegisterComponent} from "./FrontOffice/pages/register/register.component";
import {WelcomeComponent} from "./FrontOffice/pages/welcome/welcome.component";
import {authGuard} from "./FrontOffice/services/auth/auth.guard";
import {HomeComponent} from "./FrontOffice/pages/home/home.component";
import {EditProfilePageComponent} from "./FrontOffice/pages/edit-profile-page/edit-profile-page.component";
import {ForgotPasswordComponent} from "./FrontOffice/pages/forgot-password/forgot-password.component";
import {ResetPasswordComponent} from "./FrontOffice/pages/reset-password/reset-password.component";
import {LockusersComponent} from "./BackOffice/user/lockusers/lockusers.component";
import {TestComponent} from "./test/test/test.component";
import {RegisterSimpleComponent} from "./FrontOffice/pages/register-simple/register-simple.component";
import {RegisterimgComponent} from "./FrontOffice/pages/registerimg/registerimg.component";


const routes: Routes = [

  { path:'login',
  component : LoginComponent},
  { path:'register',
    component : RegisterComponent},
  { path:'registersimple',
    component : RegisterSimpleComponent},
  { path:'registerimg',
    component : RegisterimgComponent},
  { path:'welcome',
    component : WelcomeComponent,
    canActivate:[authGuard]
  },
  {
    path:'home',
    component:HomeComponent
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
        canActivate:[authGuard]
      } ]


  },
  {
    path: 'user',
    component: AllTemplateFrontComponent,
    children:[
      {
        path:'profile',
        component:EditProfilePageComponent,
        canActivate:[authGuard]
      }
    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
