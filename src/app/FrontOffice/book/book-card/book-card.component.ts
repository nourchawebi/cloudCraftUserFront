import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookResponse} from "../../../models/book-response";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit{

  public _book: BookResponse = {};
  private _manage : number= 1;
  private _bookCover: string | undefined;

  get bookCover(): string | undefined {
    if (this._book.coverPicture) {
      return  this._book.coverPicture;
    }
   return "asma"
  }

  constructor(private router: Router) {}
  showDetails(bookId: number) {
    this.router.navigate(['/books', bookId]);
  }



  get book(): BookResponse {
    return this._book;
  }

  @Input()
  set book(value: BookResponse) {
    this._book = value;
  }


  get manage(): number {
    return this._manage;
  }

  @Input()
  set manage(value: number) {
    this._manage = value;
  }

  @Output() private details: EventEmitter<BookResponse> = new EventEmitter<BookResponse>();

  ngOnInit(): void {
    console.log(this._book)
  }
  onShowDetails() {
    this.details.emit(this._book);
  }
}
