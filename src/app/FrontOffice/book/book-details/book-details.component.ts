import {Component, OnInit} from '@angular/core';
import {BookResponse} from "../../../models/book/book-response";
import {BookService} from "../../../services/bookService/book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit{
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

  onBorrowBook(id:number|undefined)
  {
    if(id!= null){
      this.bookService.borrowBook(id).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['user', 'books']);
        },
        error => {
          console.error('Error borroing book:', error);
        }
      );
    }
  }


}
