import {Component, OnInit} from '@angular/core';
import {PageResponseBookResponse} from "../../../models/page-response-book-response";
import {BookService} from "../../../services/book.service";
import {Router} from "@angular/router";
import {BookResponse} from "../../../models/book-response";
import {User} from "../../../models/user";

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
  constructor(
    private bookService: BookService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.findAllBooks();
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
    this.router.navigate(['user', 'mybookDetails', book.id]);
  }

}
