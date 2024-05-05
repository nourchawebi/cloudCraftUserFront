import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {User} from "../../../../../../../cloudcraft/src/app/models/user";
import {PageResponseBookResponse} from "../../../models/book/page-response-book-response";
import {Category} from "../../../models/book/category";
import {BookResponse} from "../../../models/book/book-response";
import {BookService} from "../../../services/bookService/book.service";
import {CategoryService} from "../../../services/bookService/category.service";


@Component({
  selector: 'app-user-books-list',
  templateUrl: './user-books-list.component.html',
  styleUrls: ['./user-books-list.component.css']
})
export class UserBooksListComponent implements OnInit{
  bookResponse: PageResponseBookResponse = {};
  page = 0;
  size = 2;
  pages: any = [];
  message = '';
  level: 'success' |'error' = 'success';
  categories: Category[] = [];
  filteredBooks: BookResponse[] = [];
  constructor(
    private bookService: BookService,
    private router: Router,
    private categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
    this.findAllBooks();
    this.loadCategories();
  }

  private findAllBooks() {
    this.bookService.findAllByUser(this.page, this.size)
      .subscribe({
        next: (books) => {
          this.bookResponse = books;
          console.log(this.bookResponse);
          console.log(books);
          this.pages = Array(this.bookResponse.totalPages)
            .fill(0)
            .map((x, i) => i);
          this.filteredBooks = this.bookResponse.content ? this.bookResponse.content : [];
        }
      });
  }


  gotToPage(page: number) {
    this.page = page;
    this.findAllBooks();
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllBooks();
  }

  goToPreviousPage() {
    this.page --;
    this.findAllBooks();
  }

  goToLastPage() {
    this.page = this.bookResponse.totalPages as number - 1;
    this.findAllBooks();
  }

  goToNextPage() {
    this.page++;
    this.findAllBooks();
  }

  get isLastPage() {
    return this.page === this.bookResponse.totalPages as number - 1;
  }

  displayBookDetails(book: BookResponse) {
    this.router.navigate(['home', 'mybookDetails', book.id]);
  }

  loadCategories() {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  filterBooksByCategory(categoryName: string) {
    if (this.bookResponse.content) {
      if (categoryName === 'All') {
        this.filteredBooks = this.bookResponse.content;
      } else {
        this.filteredBooks = this.bookResponse.content.filter(book => book.category === categoryName);
      }
    } else {
      this.filteredBooks = [];
    }
  }

}
