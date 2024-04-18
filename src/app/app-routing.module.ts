import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent as CoursesListComponenFront } from './front-end/courses-list/courses-list.component';
import { CourseDetailsComponent as CourseDetailsComponentFront } from './front-end/course-details/course-details.component';
import { AddChapterComponent } from './front-end/add-chapter/add-chapter.component';
import { ChapterListComponent } from './front-end/chapter-list/chapter-list.component';
import { ChapterDetailsComponent } from './front-end/chapter-details/chapter-details.component';
import { AddContentComponent } from './front-end/add-content/add-content.component';
import { AddSummaryComponent } from './front-end/add-summary/add-summary.component';
import { SummaryDetailsComponent } from './front-end/summary-details/summary-details.component';
import { AllTemplateBackComponent } from './back-office/all-template-back/all-template-back.component';
import { AllTemplateFrontComponent } from './front-end/all-template-front/all-template-front.component';
import { CoursesListComponent as CoursesListComponentBack } from './back-office/pages/courses-list/courses-list/courses-list.component';
import { CoursesDetailsComponent as CoursesDetailsComponentBack } from './back-office/pages/courses-details/courses-details/courses-details.component';
import { AddCourseComponent } from './back-office/pages/add-course/add-course/add-course.component';

const routes: Routes = [
  {
    path:"user",
    component:AllTemplateFrontComponent,
    children:[
     
      {
        path:"courses",
        component:CoursesListComponenFront
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
        path:"courses/:courseId/chapters",
        component:ChapterListComponent
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
        path:"courses/:courseId/summaries/add",
        component:AddSummaryComponent
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
