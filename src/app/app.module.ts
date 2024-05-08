import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule, HttpParams} from "@angular/common/http";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatNativeDateModule} from "@angular/material/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatStepperModule} from "@angular/material/stepper";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import {CommonModule, DatePipe} from "@angular/common";
import {LoginComponent} from "./FrontOffice/pages/login/login.component";
import {RegisterComponent} from "./FrontOffice/pages/register/register.component";
import {WelcomeComponent} from "./FrontOffice/pages/welcome/welcome.component";
import {HomeComponent} from "./FrontOffice/pages/home/home.component";
import {EditProfilePageComponent} from "./FrontOffice/pages/edit-profile-page/edit-profile-page.component";
import {ForgotPasswordComponent} from "./FrontOffice/pages/forgot-password/forgot-password.component";
import {ResetPasswordComponent} from "./FrontOffice/pages/reset-password/reset-password.component";
import {AllTemplateBackComponent} from "./BackOffice/all-template-back/all-template-back.component";
import {FooterBackComponent} from "./BackOffice/footer-back/footer-back.component";
import {NavbarBackComponent} from "./BackOffice/navbar-back/navbar-back.component";
import {SidebarBackComponent} from "./BackOffice/sidebar-back/sidebar-back.component";
import {FooterFrontComponent} from "./FrontOffice/footer-front/footer-front.component";
import {HeaderFrontComponent} from "./FrontOffice/header-front/header-front.component";
import {AllTemplateFrontComponent} from "./FrontOffice/all-template-front/all-template-front.component";
import { LockusersComponent } from './BackOffice/user/lockusers/lockusers.component';
import { TestComponent } from './test/test/test.component';
import { RegisterSimpleComponent } from './FrontOffice/pages/register-simple/register-simple.component';
import { RegisterimgComponent } from './FrontOffice/pages/registerimg/registerimg.component';
import { WebcameraComponent } from './FrontOffice/pages/webcamera/webcamera.component';
import {WebcamModule} from "ngx-webcam";
import { UnothorizedComponent } from './FrontOffice/pages/unothorized/unothorized.component';
import { UserstaticsComponent } from './BackOffice/user/userstatics/userstatics.component';
import {BaseChartDirective, ChartsModule} from "ng2-charts";
import {CarGestionComponent} from "./FrontOffice/pages/car-gestion/car-gestion.component";
import {AddCarComponent} from "./FrontOffice/pages/car-gestion/add-car/add-car.component";
import {ListCarComponent} from "./FrontOffice/pages/car-gestion/list-car/list-car.component";
import {LocationComponent} from "./FrontOffice/pages/location/location.component";
import {MapComponent} from "./FrontOffice/pages/map/map.component";
import {ListJourneyComponent} from "./FrontOffice/pages/journey/list-journey/list-journey.component";
import {JourneyComponent} from "./FrontOffice/pages/journey/journey.component";
import { ParticipationsComponent } from './FrontOffice/pages/journey/list-journey/participations/participations.component';
import { JourneystatisticsComponent } from './BackOffice/journey/journeystatistics/journeystatistics.component';
import {AjouterEventComponent} from "./BackOffice/event/ajouter-event/ajouter-event.component";
import {UpdateEventComponent} from "./BackOffice/event/update-event/update-event.component";
import {EventAdminComponent} from "./BackOffice/event/event-admin/event-admin.component";
import {EventComponent} from "./FrontOffice/pages/event/event.component";
import {QRCodeModule} from "angularx-qrcode";
import {CalendarComponent} from "./FrontOffice/pages/calendar/calendar.component";
import {CalendarModule, DateAdapter} from "angular-calendar";
import {adapterFactory} from "angular-calendar/date-adapters/moment";
import {EventDetailsComponent} from "./FrontOffice/pages/event-details/event-details.component";
import {ChatComponent} from "./FrontOffice/pages/chat/chat.component";
import {AddCourseComponent} from "./BackOffice/courses/add-course/add-course.component";
import {CoursesDetailsComponent as CoursesDetailsComponentBack} from "./BackOffice/courses/courses-details/courses-details.component";
import {CoursesListComponent as CoursesListComponentBack} from "./BackOffice/courses/courses-list/courses-list.component";
import {CoursesListComponent as CoursesListComponentFront} from "./FrontOffice/pages/courses-list/courses-list.component";

import {ErrorComponent} from "./ErrorHandling/error/error.component";
import {CollapseComponent} from "./UtilComponents/collapse/collapse/collapse.component";
import {RatingComponent} from "./UtilComponents/ratings/rating/rating.component";
import {ShowRatingsComponent} from "./UtilComponents/ratings/show-ratings/show-ratings.component";
import {AddChapterComponent} from "./FrontOffice/pages/add-chapter/add-chapter.component";
import {AddContentComponent} from "./FrontOffice/pages/add-content/add-content.component";
import {AddRatingComponent} from "./FrontOffice/pages/add-rating/add-rating.component";
import {AddSummaryComponent} from "./FrontOffice/pages/add-summary/add-summary.component";
import {

  CourseDetailsComponent as CourseDetailsComponentFront
} from "./FrontOffice/pages/course-details/course-details.component";
import {SummaryDetailsComponent} from "./FrontOffice/pages/summary-details/summary-details.component";
import {UpdateSummaryComponent} from "./FrontOffice/pages/update-summary/update-summary.component";
import {UpdateChapterComponent} from "./FrontOffice/pages/update-chapter/update-chapter.component";
import {ChapterDetailsComponent} from "./FrontOffice/pages/chapter-details/chapter-details.component";
import {NgbModule, NgbRating} from "@ng-bootstrap/ng-bootstrap";
import { MyBookDetailsComponent } from './FrontOffice/book/my-book-details/my-book-details.component';
import { UserBooksListComponent } from './FrontOffice/book/user-books-list/user-books-list.component';
import { UpdateBookComponent } from './FrontOffice/book/update-book/update-book.component';
import { BooksBorrowListComponent } from './FrontOffice/book/books-borrow-list/books-borrow-list.component';
import { BookListComponent } from './FrontOffice/book/book-list/book-list.component';
import { BookDetailsComponent } from './FrontOffice/book/book-details/book-details.component';
import { BookCardComponent } from './FrontOffice/book/book-card/book-card.component';
import { BookBorrowCardComponent } from './FrontOffice/book/book-borrow-card/book-borrow-card.component';
import { AddBookComponent } from './FrontOffice/book/add-book/add-book.component';
import { BookCategoryComponent } from './BackOffice/category/book-category/book-category.component';
import { BookDashboardComponent } from './BackOffice/category/book-dashboard/book-dashboard.component';
import { CategoryListComponent } from './BackOffice/category/category-list/category-list.component';
import { CoursesDashboardComponent } from './BackOffice/courses/courses-dashboard/courses-dashboard.component';
import { ChartEventComponent } from './BackOffice/event/chart-event/chart-event.component';
import { UpdateAnonnceComponent } from './FrontOffice/pages/annonce/update-anonnce/update-anonnce.component';
import { GetAnnonceComponent } from './FrontOffice/pages/annonce/get-annonce/get-annonce.component';
import { AddAnnonceComponent } from './FrontOffice/pages/annonce/add-annonce/add-annonce.component';
import { GetAnnonceByIDUserComponent } from './FrontOffice/pages/annonce/get-annonce-by-iduser/get-annonce-by-iduser.component';
import { AddCommentComponent } from './FrontOffice/pages/comment/add-comment/add-comment.component';
import { GetTargetAnnonceComponent } from './FrontOffice/pages/annonce/get-target-annonce/get-target-annonce.component';
import { NotfoundComponent } from './FrontOffice/pages/notfound/notfound.component';
import {FindAnnonceByDateComponent} from "./BackOffice/find-annonce-by-date/find-annonce-by-date.component";
import {StatsTop3AnnonceComponent} from "./BackOffice/stats-top3-annonce/stats-top3-annonce.component";
import {StatsCountTypeAnnonceComponent} from "./BackOffice/stats-count-type-annonce/stats-count-type-annonce.component";
import {AllAnnoncesComponent} from "./BackOffice/annonce/all-annonces/all-annonces.component";

//import {NgToastModule} from "ng-angular-popup";

const Validators = () => {

};

@NgModule({
  declarations: [
    AppComponent,
    GetAnnonceByIDUserComponent,
    LoginComponent,
    AddCommentComponent,
    RegisterComponent,
    WelcomeComponent,
    AddAnnonceComponent,
    GetAnnonceComponent,
    HomeComponent,
    GetAnnonceComponent,
    GetTargetAnnonceComponent,
    UpdateAnonnceComponent,
    EditProfilePageComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    AllTemplateBackComponent,
    FooterBackComponent,
    NavbarBackComponent,
    SidebarBackComponent,
    AllTemplateFrontComponent,
    FooterFrontComponent,
    UpdateChapterComponent,
    HeaderFrontComponent,
    LockusersComponent,
    ChapterDetailsComponent,
    TestComponent,
    RegisterSimpleComponent,
    RegisterimgComponent,
    WebcameraComponent,
    UnothorizedComponent,
    UserstaticsComponent,
    CarGestionComponent,
    AddCarComponent,
    ListCarComponent,
    LocationComponent,
    MapComponent,
    ListJourneyComponent,
    JourneyComponent,
    ParticipationsComponent,
    JourneystatisticsComponent,
    AjouterEventComponent,
    UpdateEventComponent,
    EventAdminComponent,
    EventComponent,
    CalendarComponent,
    EventDetailsComponent,
    ChatComponent,
    ChartEventComponent,
    AddCourseComponent,
    CoursesListComponentBack,
    CoursesListComponentFront,
    ErrorComponent,
    CollapseComponent,
    RatingComponent,
    ShowRatingsComponent,
    AppComponent,
    AddCourseComponent,
    ErrorComponent,
    AllTemplateBackComponent,
    SidebarBackComponent,
    FooterBackComponent,
    NavbarBackComponent,
    AllTemplateFrontComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    CollapseComponent,
    ShowRatingsComponent,
    RatingComponent,
    AddChapterComponent,
    AddContentComponent,
    AddRatingComponent,
    AddSummaryComponent,
    CourseDetailsComponentFront,
    CoursesDetailsComponentBack,
    SummaryDetailsComponent,
    UpdateSummaryComponent,
    MyBookDetailsComponent,
    UserBooksListComponent,
    UpdateBookComponent,
    BooksBorrowListComponent,
    BookListComponent,
    BookDetailsComponent,
    BookCardComponent,
    BookBorrowCardComponent,
    AddBookComponent,

    BookCategoryComponent,
    BookDashboardComponent,
    CategoryListComponent,
    CoursesDashboardComponent,
    NotfoundComponent,
    FindAnnonceByDateComponent,
    StatsTop3AnnonceComponent,
    StatsCountTypeAnnonceComponent,
    AllAnnoncesComponent



  ],
    imports: [
        ChartsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        BrowserAnimationsModule,
        MatStepperModule,
        MatCheckboxModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        CommonModule,
        MatProgressSpinnerModule,
        MatCardModule,
        WebcamModule,

        QRCodeModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
      NgbModule,
        NgbRating,
        // NgToastModule

    ],
  providers: [HttpClient,HttpParams,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
