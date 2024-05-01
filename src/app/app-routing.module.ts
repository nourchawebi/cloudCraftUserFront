import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import {AllTemplateFrontComponent} from "./FrontOffice/all-template-front/all-template-front.component";
import {CategoryListComponent} from "./BackOffice/category/category-list/category-list.component";
import { BookCategoryComponent} from "./BackOffice/category/book-category/book-category.component";
import {AddBookComponent} from "./FrontOffice/book/add-book/add-book.component";
import {BookListComponent} from "./FrontOffice/book/book-list/book-list.component";
import {BookDetailsComponent} from "./FrontOffice/book/book-details/book-details.component";
import {UserBooksListComponent} from "./FrontOffice/book/user-books-list/user-books-list.component";
import {BooksBorrowListComponent} from "./FrontOffice/book/books-borrow-list/books-borrow-list.component";
import {MyBookDetailsComponent} from "./FrontOffice/book/my-book-details/my-book-details.component";
import {UpdateBookComponent} from "./FrontOffice/book/update-book/update-book.component";

const routes: Routes = [
  {
 path: 'admin',
 component: AllTemplateBackComponent,
    children: [
      {
        path: 'list',
        component: CategoryListComponent
      },
      {
        path: 'add',
        component: BookCategoryComponent
      }

    ]
  },
  {
    path: 'user',
    component: AllTemplateFrontComponent,
    children: [
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

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

