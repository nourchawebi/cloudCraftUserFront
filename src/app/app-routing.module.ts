import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './UtilComponents/ratings/rating/rating.component';
import {  CoursesListComponent as CoursesListComponentFront } from './FrontOffice/pages/courses-list/courses-list.component';
import { AddCourseComponent } from './BackOffice/pages/add-course/add-course/add-course.component';
import { CourseDetailsComponent as CourseDetailsComponentFront } from './FrontOffice/pages/course-details/course-details.component';
import { AddChapterComponent } from './FrontOffice/pages/add-chapter/add-chapter.component';
import { ChapterDetailsComponent } from './FrontOffice/pages/chapter-details/chapter-details.component';
import { AddContentComponent } from './FrontOffice/pages/add-content/add-content.component';
import { AddSummaryComponent } from './FrontOffice/pages/add-summary/add-summary.component';
import { SummaryDetailsComponent } from './FrontOffice/pages/summary-details/summary-details.component';
import { ErrorComponent } from './ErrorHandling/error/error.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { FooterBackComponent } from './BackOffice/footer-back/footer-back.component';
import { NavbarBackComponent } from './BackOffice/navbar-back/navbar-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { CoursesListComponent  as CoursesListComponentBack} from './BackOffice/pages/courses-list/courses-list.component';
import { CoursesDetailsComponent as CoursesDetailsComponentBack } from './BackOffice/pages/courses-details/courses-details/courses-details.component';
import { CollapseComponent } from './UtilComponents/collapse/collapse/collapse.component';
import { ShowRatingsComponent } from './UtilComponents/ratings/show-ratings/show-ratings.component';
import { AddRatingComponent } from './FrontOffice/pages/add-rating/add-rating.component';
import { UpdateChapterComponent } from './FrontOffice/pages/update-chapter/update-chapter.component';
import { UpdateSummaryComponent } from './FrontOffice/pages/update-summary/update-summary.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { GlobalErrorHandler } from './ErrorHandling/global-error-handler';


const routes: Routes = [
  {
    path:"user",
    component:AllTemplateFrontComponent,
    children:[
     
      {
        path:"courses",
        component:CoursesListComponentFront
      },
      {
        path:"courses/:courseId",
        component:CourseDetailsComponentFront
      },
      {
        path:"courses/:courseId/chapters/add",
        component:AddChapterComponent
      },
      {
        path:"courses/:courseId/chapters/:chapterId",
        component:ChapterDetailsComponent
      },
      {
        path:"courses/:courseId/chapters/:chapterId/contents/add",
        component:AddContentComponent
      },
      {
        path:"courses/:courseId/chapters/:chapterId/update",
        component:UpdateChapterComponent
      },
      {
        path:"courses/:courseId/summaries/add",
        component:AddSummaryComponent
      },
      {
        path:"courses/:courseId/summaries/:summaryId/update",
        component:UpdateSummaryComponent
      },
      {
        path:"courses/:courseId/chapters/:chapterId/summaries/add",
        component:AddSummaryComponent
      },

      {
        path:"courses/:courseId/summaries/:summaryId",
        component:SummaryDetailsComponent
      },
      {
        path:"courses/:courseId/chapters/:chapterId/summaries/:summaryId",
        component:SummaryDetailsComponent
      },

      {
        path:"courses/:courseId/chapters/:chapterId/summaries/:summaryId/update",
        component:UpdateSummaryComponent
      },

      {
        path:"courses/:courseId/ratings/add",
        component:AddRatingComponent
      },
      
      {
        path:"courses/:courseId/summaries/:summaryId/ratings/add",
        component:AddRatingComponent
      },
      {
        path:"courses/:courseId/chapters/:chapterId/ratings/add",
        component:AddRatingComponent
      },
      
    ]
  },
 
  {
    path:"admin",
    component:AllTemplateBackComponent,
    children:[
      {
        path:"courses",
        component:CoursesListComponentBack
      },
      {
        path:"courses/add",
        component:AddCourseComponent,
        
      },
      {
        path:"courses/:courseId",
        component:CoursesDetailsComponentBack
      },
     

    ]
  }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
