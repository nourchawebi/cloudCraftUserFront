import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddCourseComponent } from './add-course/add-course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AddChapterComponent } from './add-chapter/add-chapter.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { ChapterDetailsComponent } from './chapter-details/chapter-details.component';
import { AddContentComponent } from './add-content/add-content.component';
import { AddSummaryComponent } from './add-summary/add-summary.component';
import { SummaryDetailsComponent } from './summary-details/summary-details.component';
import { GlobalErrorHandler } from './ErrorHandling/global-error-handler';
import { ErrorComponent } from './ErrorHandling/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    AddCourseComponent,
    CourseDetailsComponent,
    AddChapterComponent,
    ChapterListComponent,
    ChapterDetailsComponent,
    AddContentComponent,
    AddSummaryComponent,
    SummaryDetailsComponent,
    ErrorComponent,
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
