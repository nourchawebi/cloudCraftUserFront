import {Component, OnInit} from '@angular/core';
import {BookResponse} from "../../../models/book/book-response";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../../services/bookService/book.service";

@Component({
  selector: 'app-my-book-details',
  templateUrl: './my-book-details.component.html',
  styleUrls: ['./my-book-details.component.css']
})
export class MyBookDetailsComponent implements OnInit {
  bookId?: number;
  book: BookResponse = {};

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params['bookId'];
    if (this.bookId) {
      this.bookService.findById(this.bookId).subscribe({
        next: (book) => {
          this.book = book;
        },
        error: (error) => {
          console.error('Error loading book details:', error);
        }
      });
    }
  }

  OndeleteBook(id: number | undefined): void {
    if(id!= null){
      this.bookService.deleteBook(id).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['user', 'userBooks']);
        },
        error => {
          console.error('Error deleting book:', error);
        }
      );
    }
  }

  OnEditBook(book: BookResponse|undefined)
  {
    this.router.navigate(['user', 'edit',book?.id]);
  }

}




