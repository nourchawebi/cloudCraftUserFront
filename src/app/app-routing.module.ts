import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AllTemplateFrontComponent} from "./FrontOffice/all-template-front/all-template-front.component";
import {AllTemplateBackComponent} from "./BackOffice/all-template-back/all-template-back.component";
import {LoginComponent} from "./FrontOffice/pages/login/login.component";
import {RegisterComponent} from "./FrontOffice/pages/register/register.component";
import {WelcomeComponent} from "./FrontOffice/pages/welcome/welcome.component";
import {adminAuthGuard, authGuard} from "./FrontOffice/services/auth/auth.guard";
import {HomeComponent} from "./FrontOffice/pages/home/home.component";
import {EditProfilePageComponent} from "./FrontOffice/pages/edit-profile-page/edit-profile-page.component";
import {ForgotPasswordComponent} from "./FrontOffice/pages/forgot-password/forgot-password.component";
import {ResetPasswordComponent} from "./FrontOffice/pages/reset-password/reset-password.component";
import {LockusersComponent} from "./BackOffice/user/lockusers/lockusers.component";
import {TestComponent} from "./test/test/test.component";
import {RegisterSimpleComponent} from "./FrontOffice/pages/register-simple/register-simple.component";
import {RegisterimgComponent} from "./FrontOffice/pages/registerimg/registerimg.component";
import {WebcameraComponent} from "./FrontOffice/pages/webcamera/webcamera.component";
import {UnothorizedComponent} from "./FrontOffice/pages/unothorized/unothorized.component";
import {UserstaticsComponent} from "./BackOffice/user/userstatics/userstatics.component";
import {CarGestionComponent} from "./FrontOffice/pages/car-gestion/car-gestion.component";
import {AddCarComponent} from "./FrontOffice/pages/car-gestion/add-car/add-car.component";
import {ListCarComponent} from "./FrontOffice/pages/car-gestion/list-car/list-car.component";
import {LocationComponent} from "./FrontOffice/pages/location/location.component";
import {JourneyComponent} from "./FrontOffice/pages/journey/journey.component";
import {ListJourneyComponent} from "./FrontOffice/pages/journey/list-journey/list-journey.component";
import {JourneystatisticsComponent} from "./BackOffice/journey/journeystatistics/journeystatistics.component";
import {AjouterEventComponent} from "./BackOffice/event/ajouter-event/ajouter-event.component";
import {UpdateEventComponent} from "./BackOffice/event/update-event/update-event.component";
import {EventAdminComponent} from "./BackOffice/event/event-admin/event-admin.component";
import {EventComponent} from "./FrontOffice/pages/event/event.component";
import {CalendarComponent} from "./FrontOffice/pages/calendar/calendar.component";
import {EventDetailsComponent} from "./FrontOffice/pages/event-details/event-details.component";
import {ChatComponent} from "./FrontOffice/pages/chat/chat.component";
import {CoursesListComponent} from "./BackOffice/courses/courses-list/courses-list.component";
import {AddChapterComponent} from "./FrontOffice/pages/add-chapter/add-chapter.component";
import {ChapterDetailsComponent} from "./FrontOffice/pages/chapter-details/chapter-details.component";
import {AddContentComponent} from "./FrontOffice/pages/add-content/add-content.component";
import {UpdateChapterComponent} from "./FrontOffice/pages/update-chapter/update-chapter.component";
import {AddSummaryComponent} from "./FrontOffice/pages/add-summary/add-summary.component";
import {UpdateSummaryComponent} from "./FrontOffice/pages/update-summary/update-summary.component";
import {SummaryDetailsComponent} from "./FrontOffice/pages/summary-details/summary-details.component";
import {AddRatingComponent} from "./FrontOffice/pages/add-rating/add-rating.component";
import {AddCourseComponent} from "./BackOffice/courses/add-course/add-course.component";
import {CoursesDetailsComponent as CoursesDetailsComponentBack} from "./BackOffice/courses/courses-details/courses-details.component";
import {CoursesListComponent as CoursesListComponentBack} from "./BackOffice/courses/courses-list/courses-list.component";
import {CoursesListComponent as CoursesListComponentFront} from "./FrontOffice/pages/courses-list/courses-list.component";

import {ErrorComponent} from "./ErrorHandling/error/error.component";
import {CollapseComponent} from "./UtilComponents/collapse/collapse/collapse.component";
import {RatingComponent} from "./UtilComponents/ratings/rating/rating.component";
import {ShowRatingsComponent} from "./UtilComponents/ratings/show-ratings/show-ratings.component";
import {

  CourseDetailsComponent as CourseDetailsComponentFront
} from "./FrontOffice/pages/course-details/course-details.component";
import {AddBookComponent} from "./FrontOffice/book/add-book/add-book.component";
import {BookListComponent} from "./FrontOffice/book/book-list/book-list.component";
import {BookDetailsComponent} from "./FrontOffice/book/book-details/book-details.component";
import {UserBooksListComponent} from "./FrontOffice/book/user-books-list/user-books-list.component";
import {BooksBorrowListComponent} from "./FrontOffice/book/books-borrow-list/books-borrow-list.component";
import {UpdateBookComponent} from "./FrontOffice/book/update-book/update-book.component";
import {MyBookDetailsComponent} from "./FrontOffice/book/my-book-details/my-book-details.component";
import {BookCategoryComponent} from "./BackOffice/category/book-category/book-category.component";
import {BookDashboardComponent} from "./BackOffice/category/book-dashboard/book-dashboard.component";
import {CategoryListComponent} from "./BackOffice/category/category-list/category-list.component";
import { CoursesDashboardComponent } from './BackOffice/courses/courses-dashboard/courses-dashboard.component';
import { AddAnnonceComponent } from './FrontOffice/pages/annonce/add-annonce/add-annonce.component';
import { GetAnnonceComponent } from './FrontOffice/pages/annonce/get-annonce/get-annonce.component';
import { GetAnnonceByIDUserComponent } from './FrontOffice/pages/annonce/get-annonce-by-iduser/get-annonce-by-iduser.component';
import { UpdateAnonnceComponent } from './FrontOffice/pages/annonce/update-anonnce/update-anonnce.component';
import { ChartEventComponent } from './BackOffice/event/chart-event/chart-event.component';
import {NotfoundComponent} from "./FrontOffice/pages/notfound/notfound.component";

const routes: Routes = [


  { path:'login',
  component : LoginComponent},
  { path:'webcam',
    component : WebcameraComponent},
  { path:'register',
    component : RegisterComponent},
  { path:'registersimple',
    component : RegisterSimpleComponent},
  { path:'registerimg',
    component : RegisterimgComponent},

  {
    path:'home',
    component:HomeComponent,
    children:[
      { path: 'car_gestion', component:CarGestionComponent},
      { path: 'add_car', component:AddCarComponent},
      {path: 'cars', component:ListCarComponent},
      {path: 'location', component:LocationComponent},
      {path: 'add_journey', component: JourneyComponent},
      {path: 'list_journey', component: ListJourneyComponent},
      {path:'event' , component : EventComponent},
      {path: 'calendar', component: CalendarComponent},
      {path:'chat', component: ChatComponent},
      {path: "add-annonce", component: AddAnnonceComponent},
      {path: "get-annonce", component: GetAnnonceComponent},
      {path: "get-annonceUser/:userId", component: GetAnnonceByIDUserComponent},
      { path: "UpdateAnonce/:id", component: UpdateAnonnceComponent },

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
      {
        path: 'addbook',
        component: AddBookComponent
      },
      {
        path: 'books',
        component: BookListComponent
      },
      {
        path: 'bookDetails/:bookId',
        component: BookDetailsComponent
      },
      {
        path: 'userBooks',
        component: UserBooksListComponent
      },
      {
        path: 'borrows',
        component: BooksBorrowListComponent
      },
      {
        path: 'mybookDetails/:bookId',
        component: MyBookDetailsComponent
      },
      {
        path: 'edit/:bookId',
        component: UpdateBookComponent
      }



    ]
  },

  {
    path:'test',
    component:TestComponent
  },
  {
    path:'profile',
    component:EditProfilePageComponent,
    canActivate:[authGuard]
  },
  {
    path:'unauthorized',
    component:UnothorizedComponent,

  },
  { path:'forgotpassword',
    component:ForgotPasswordComponent

  },
  {
    path:'resetpassword',
    component:ResetPasswordComponent
  },
  {
    path: 'admin',
    component: AllTemplateBackComponent,
    children:[
      {
        path : 'courses', component : CoursesListComponent
        // loadChildren : () => import('./evenement/event-admin/event-admin.component').then(m => m.EventAdminComponent)
      },
      {
        path : 'courses/add', component : AddCourseComponent
        // loadChildren : () => import('./evenement/event-admin/event-admin.component').then(m => m.EventAdminComponent)
      },
      {
        path : 'courses/:courseId', component : CoursesDetailsComponentBack
        // loadChildren : () => import('./evenement/event-admin/event-admin.component').then(m => m.EventAdminComponent)
      },
      {
        path : 'event-admin', component : EventAdminComponent
        // loadChildren : () => import('./evenement/event-admin/event-admin.component').then(m => m.EventAdminComponent)
      },
      {path : 'CreateEvent' , component : AjouterEventComponent},
      {path : 'updateEvent/:id' , component :UpdateEventComponent},
      {path : 'chart-event' , component : ChartEventComponent},

      {
        path:'lockuser',
        component:LockusersComponent,
        canActivate:[adminAuthGuard]

      } ,
      { path:'userstat',
        component : UserstaticsComponent,
        canActivate:[adminAuthGuard]
      },
      { path:'carpoolingstat',
        component : JourneystatisticsComponent,
        canActivate:[adminAuthGuard]
      },
      {
        path: 'listBooks',
        component: CategoryListComponent
      },
      {
        path: 'addBook',
        component: BookCategoryComponent
      },
      {
        path: 'bookDashboard',
        component: BookDashboardComponent
      },
      {
        path: 'courseDashboard',
        component: CoursesDashboardComponent
      }
    ]


  },

  {
    path: 'user',
    component: AllTemplateFrontComponent,
    children:[
      {
        path:'profile',
        component:EditProfilePageComponent,
        canActivate:[authGuard]
      },
      { path: 'event-detail/:id', component: EventDetailsComponent },

    ]

  },
  { path:'user/welcome', component : WelcomeComponent,},

  {path: '', redirectTo: 'user/welcome', pathMatch: 'full'},
  {path: '**', component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
