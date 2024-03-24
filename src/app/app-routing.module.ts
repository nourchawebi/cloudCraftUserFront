import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {authGuard} from "./services/auth/auth.guard";
import {HomeComponent} from "./pages/home/home.component";
import {EditProfilePageComponent} from "./edit-profile-page/edit-profile-page.component";


const routes: Routes = [

  { path:'login',
  component : LoginComponent},
  { path:'register',
    component : RegisterComponent},
  { path:'welcome',
    component : WelcomeComponent,
    //canActivate:[authGuard]
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'editprofile',
    component:EditProfilePageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
