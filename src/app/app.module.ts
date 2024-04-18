import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesListComponent as CoursesListComponentFront} from './front-end/courses-list/courses-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseDetailsComponent } from './front-end/course-details/course-details.component';
import { AddChapterComponent } from './front-end/add-chapter/add-chapter.component';
import { ChapterListComponent } from './front-end/chapter-list/chapter-list.component';
import { ChapterDetailsComponent } from './front-end/chapter-details/chapter-details.component';
import { AddContentComponent } from './front-end/add-content/add-content.component';
import { AddSummaryComponent } from './front-end/add-summary/add-summary.component';
import { SummaryDetailsComponent } from './front-end/summary-details/summary-details.component';
import { GlobalErrorHandler } from './ErrorHandling/global-error-handler';
import { ErrorComponent } from './ErrorHandling/error/error.component';
import { AllTemplateBackComponent } from './back-office/all-template-back/all-template-back.component';
import { SidebarBackComponent } from './back-office/sidebar-back/sidebar-back.component';
import { FooterBackComponent } from './back-office/footer-back/footer-back.component';
import { NavbarBackComponent } from './back-office/navbar-back/navbar-back.component';
import { AllTemplateFrontComponent } from './front-end/all-template-front/all-template-front.component';
import { FooterFrontComponent } from './front-end/footer-front/footer-front.component';
import { HeaderFrontComponent } from './front-end/header-front/header-front.component';
import { CoursesListComponent as CoursesListComponentBack } from './back-office/pages/courses-list/courses-list/courses-list.component';
import { CoursesDetailsComponent as CoursesDetailsComponentBack } from './back-office/pages/courses-details/courses-details/courses-details.component';
import { CollapseComponent } from './UtilComponents/collapse/collapse/collapse.component';
import { AddCourseComponent } from './back-office/pages/add-course/add-course/add-course.component';
@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponentFront,
    AddCourseComponent,
    CourseDetailsComponent,
    AddChapterComponent,
    ChapterListComponent,
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
    CollapseComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [
    HttpClient,
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
