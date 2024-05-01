import {Component, OnInit} from '@angular/core';
import {PageResponseBookResponse} from "../../../models/book/page-response-book-response";
import {BookService} from "../../../services/bookService/book.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../../services/bookService/category.service";
import {PageResponseBookBorrowResponse} from "../../../models/book/page-response-book-borrow-response";
import {BookBorrowResonse} from "../../../models/book/book-borrow-resonse";

@Component({
  selector: 'app-books-borrow-list',
  templateUrl: './books-borrow-list.component.html',
  styleUrls: ['./books-borrow-list.component.css']
})
export class BooksBorrowListComponent implements OnInit {
  bookResponse: PageResponseBookBorrowResponse = {};
  page = 0;
  size = 5;
  pages: any = [];
  message = '';
  level: 'success' |'error' = 'success';
  filterByReturned: boolean | null = null;
  filteredBooks: BookBorrowResonse[] = []; // Variable pour stocker les livres filtrés



  constructor(
    private bookService: BookService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  private findAll() {
    this.bookService.findBookBorrowsByUser(this.page, this.size)
      .subscribe({
        next: (books) => {
          this.bookResponse = books;
          console.log(this.bookResponse);
          console.log(books);
          this.filterBooks();
          this.pages = Array(this.bookResponse.totalPages)
            .fill(0)
            .map((x, i) => i);
        }
      });
  }

  gotToPage(page: number) {
    this.page = page;
  //  this.findAllBooks();
  }

  goToFirstPage() {
    this.page = 0;
  //  this.findAllBooks();
  }

  goToPreviousPage() {
    this.page --;
   // this.findAllBooks();
  }

  goToLastPage() {
    this.page = this.bookResponse.totalPages as number - 1;
   // this.findAllBooks();
  }

  goToNextPage() {
    this.page++;
    //this.findAllBooks();
  }

  get isLastPage() {
    return this.page === this.bookResponse.totalPages as number - 1;
  }

  returnBook(book: BookBorrowResonse) {
    this.message = '';
    this.level = 'success';
    this.bookService.returnBook(book.id as number).subscribe({
      next: () => {
        this.level = 'success';
        this.message = 'Book successfully returned';
        this.findAll()
      },
      error: (err) => {
        console.log(err);
        this.level = 'error';
        this.message = err.error.error;
      }
    });
  }

  filterBooks() {
    if (this.bookResponse && this.bookResponse.content) {
      if (this.filterByReturned !== null) {
        this.filteredBooks = this.bookResponse.content.filter(book => book.returned === this.filterByReturned);
      } else {
        this.filteredBooks = this.bookResponse.content; // Si aucun filtre n'est appliqué, afficher tous les livres
      }
    }
  }

  applyFilter(filterValue: boolean | null) {
    this.filterByReturned = filterValue;
    this.findAll();
  }

}
