import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import {AllTemplateFrontComponent} from "./FrontOffice/all-template-front/all-template-front.component";
import {CategoryListComponent} from "./BackOffice/category-list/category-list.component";
import { BookCategoryComponent} from "./BackOffice/book-category/book-category.component";
import {AddBookComponent} from "./FrontOffice/add-book/add-book.component";
import {BookListComponent} from "./FrontOffice/book/book-list/book-list.component";

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
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

