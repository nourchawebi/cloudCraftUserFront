import {Component, OnInit} from '@angular/core';
import {BookResponse} from "../../../models/book-response";
import {BookService} from "../../../services/book.service";
import {ActivatedRoute} from "@angular/router";

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
    private bookService: BookService
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


}
