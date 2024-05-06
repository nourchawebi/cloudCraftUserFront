import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {BookBorrowResonse} from "../../../models/book/book-borrow-resonse";
import {BookService} from "../../../services/api/book/book.service";

@Component({
  selector: 'app-book-borrow-card',
  templateUrl: './book-borrow-card.component.html',
  styleUrls: ['./book-borrow-card.component.css']
})
export class BookBorrowCardComponent implements OnInit{

  public _book: BookBorrowResonse = {};



  constructor(private router: Router,
              private bookService: BookService,) {}

  get book(): BookBorrowResonse {
    return this._book;
  }

  @Input()
  set book(value: BookBorrowResonse) {
    this._book = value;
  }

  @Output() private return: EventEmitter<BookBorrowResonse> = new EventEmitter<BookBorrowResonse>();

  ngOnInit(): void {
    console.log(this._book)
  }

  onReturn() {
    this.return.emit(this._book);
  }
}
