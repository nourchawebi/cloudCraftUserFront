import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './front-end/courses-list/courses-list.component';
import { AddCourseComponent } from './front-end/add-course/add-course.component';
import { CourseDetailsComponent } from './front-end/course-details/course-details.component';
import { AddChapterComponent } from './front-end/add-chapter/add-chapter.component';
import { ChapterListComponent } from './front-end/chapter-list/chapter-list.component';
import { ChapterDetailsComponent } from './front-end/chapter-details/chapter-details.component';
import { AddContentComponent } from './front-end/add-content/add-content.component';
import { AddSummaryComponent } from './front-end/add-summary/add-summary.component';
import { SummaryDetailsComponent } from './front-end/summary-details/summary-details.component';

const routes: Routes = [
  {
    path:"courses/add",
    component:AddCourseComponent
  },
  {
    path:"courses",
    component:CoursesListComponent
  },
  {
    path:"courses/:courseId",
    component:CourseDetailsComponent
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
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
