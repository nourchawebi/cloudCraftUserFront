import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponentFront,
    AddCourseComponent,
    CourseDetailsComponentFront,
    AddChapterComponent,
    ChapterDetailsComponent,
    AddContentComponent,
    AddSummaryComponent,
    SummaryDetailsComponent,
    ErrorComponent,
    AllTemplateBackComponent,
    SidebarBackComponent,
    FooterBackComponent,
    NavbarBackComponent,
    AllTemplateFrontComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    CoursesListComponentBack,
    CoursesDetailsComponentBack,
    CollapseComponent,
    ShowRatingsComponent,
    RatingComponent,
    AddRatingComponent,
    UpdateChapterComponent,
    UpdateSummaryComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,

  ],
  providers: [
    HttpClient,
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
