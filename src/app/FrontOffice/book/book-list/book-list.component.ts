import {Component, OnInit} from '@angular/core';
import {PageResponseBookResponse} from "../../../models/page-response-book-response";
import {Router} from "@angular/router";
import {BookService} from "../../../services/book.service";
import {BookResponse} from "../../../models/book-response";
import {User} from "../../../models/user";
import {CategoryService} from "../../../services/category.service";
import {Category} from "../../../models/category";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{

  bookResponse: PageResponseBookResponse = {};
  page = 0;
  size = 5;
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
    this.bookService.findAll(this.page, this.size)
      .subscribe({
        next: (books) => {
          this.bookResponse = books;
          console.log(this.bookResponse);
          console.log(books);
          this.pages = Array(this.bookResponse.totalPages)
            .fill(0)
            .map((x, i) => i);
          this.filteredBooks = this.bookResponse.content ? this.bookResponse.content : [];        }
      });
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
    // Actualiser les livres affichés en appelant à nouveau findAllBooks
    //this.findAllBooks();
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
    this.router.navigate(['user', 'bookDetails', book.id]);
  }


}
