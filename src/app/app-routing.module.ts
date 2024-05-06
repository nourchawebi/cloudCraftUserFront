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
import { FindAnnonceByDateComponent } from './BackOffice/find-annonce-by-date/find-annonce-by-date.component';
import { StatsTop3AnnonceComponent } from './BackOffice/stats-top3-annonce/stats-top3-annonce.component';
import { StatsCountTypeAnnonceComponent } from './BackOffice/stats-count-type-annonce/stats-count-type-annonce.component';
import { UpdateAnonnceComponent } from './FrontOffice/pages/annonce/update-anonnce/update-anonnce.component';


const routes: Routes = [
  {path: "add-annonce", component: AddAnnonceComponent},
  {path: "get-annonce", component: GetAnnonceComponent},
  {path: "get-annonceUser/:userId", component: GetAnnonceByIDUserComponent},
  {path: "all-annonces", component:  AllAnnoncesComponent},
  { path: "UpdateAnonce/:id", component: UpdateAnonnceComponent },

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
      {
        path:'findByDate',
        component:FindAnnonceByDateComponent
      },
      {
        path:'Top3Annonce',
        component:StatsTop3AnnonceComponent
      },
      {
        path:'pourcentage',
        component:StatsCountTypeAnnonceComponent
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
