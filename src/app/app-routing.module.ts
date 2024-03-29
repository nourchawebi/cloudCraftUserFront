import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {authGuard} from "./services/auth/auth.guard";
import {HomeComponent} from "./pages/home/home.component";
import {EditProfilePageComponent} from "./pages/edit-profile-page/edit-profile-page.component";
import {ForgotPasswordComponent} from "./pages/forgot-password/forgot-password.component";
import {ResetPasswordComponent} from "./pages/reset-password/reset-password.component";


const routes: Routes = [

  { path:'login',
  component : LoginComponent},
  { path:'register',
    component : RegisterComponent},
  { path:'welcome',
    component : WelcomeComponent,
    canActivate:[authGuard]
  },
  {
    path:'home',
    component:HomeComponent
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
