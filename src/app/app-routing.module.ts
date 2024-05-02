import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnonceComponent } from './FrontOffice/pages/annonce/add-annonce/add-annonce.component';
import { GetAnnonceComponent } from './FrontOffice/pages/annonce/get-annonce/get-annonce.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';

import { AddCommentComponent } from './FrontOffice/pages/comment/add-comment/add-comment.component';
import { GetTargetAnnonceComponent } from './FrontOffice/pages/annonce/get-target-annonce/get-target-annonce.component';
import { GetAnnonceByIDUserComponent } from './FrontOffice/pages/annonce/get-annonce-by-iduser/get-annonce-by-iduser.component';
import { AllAnnoncesComponent } from './BackOffice/annonce/all-annonces/all-annonces.component';
import { Path } from 'leaflet';


const routes: Routes = [
  {path: "add-annonce", component: AddAnnonceComponent},
  {path: "get-annonce", component: GetAnnonceComponent},
  {path: "get-annonceUser/:userId", component: GetAnnonceByIDUserComponent},
  {path: "all-annonces", component:  AllAnnoncesComponent},
  //{path: "annonce-statics", component:  AnnonceStaticsComponent},
  
  //{path: "add-comment", component:AddCommentComponent},
  
 // { path: "get-target-annonce", component: GetTargetAnnonceComponent },

  {
    path: 'admin',
    component: AllTemplateBackComponent,
    children:[
      {
        path:'all-annonces',
        component:AllAnnoncesComponent
      },
     
    ]


  },
  {
    path: 'user',
    component: AllTemplateFrontComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
