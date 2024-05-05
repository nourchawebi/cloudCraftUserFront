import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { FooterBackComponent } from './BackOffice/footer-back/footer-back.component';
import { NavbarBackComponent } from './BackOffice/navbar-back/navbar-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { CategoryListComponent } from './BackOffice/category/category-list/category-list.component';
import {HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule} from "@angular/forms";
import { BookCategoryComponent } from './BackOffice/category/book-category/book-category.component';
import {FormsModule} from "@angular/forms";
import { AddBookComponent } from './FrontOffice/book/add-book/add-book.component';
import { BookListComponent } from './FrontOffice/book/book-list/book-list.component';
import { BookDetailsComponent } from './FrontOffice/book/book-details/book-details.component';
import { BookCardComponent } from './FrontOffice/book/book-card/book-card.component';
import { UserBooksListComponent } from './FrontOffice/book/user-books-list/user-books-list.component';
import { BooksBorrowListComponent } from './FrontOffice/book/books-borrow-list/books-borrow-list.component';
import { MyBookDetailsComponent } from './FrontOffice/book/my-book-details/my-book-details.component';
import { BookBorrowCardComponent } from './FrontOffice/book/book-borrow-card/book-borrow-card.component';
import { UpdateBookComponent } from './FrontOffice/book/update-book/update-book.component';
import { BookDashboardComponent } from './BackOffice/category/book-dashboard/book-dashboard.component';
import {ChartsModule} from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    AllTemplateBackComponent,
    FooterBackComponent,
    NavbarBackComponent,
    SidebarBackComponent,
    AllTemplateFrontComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    CategoryListComponent,
    BookCategoryComponent,
    AddBookComponent,
    BookListComponent,
    BookDetailsComponent,
    BookCardComponent,
    UserBooksListComponent,
    BooksBorrowListComponent,
    MyBookDetailsComponent,
    BookBorrowCardComponent,
    UpdateBookComponent,
    BookDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}
