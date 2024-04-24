import {Component, Input} from '@angular/core';
import {BookResponse} from "../../../models/book-response";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  private _book: BookResponse = {};
  private _manage : number= 1;
  private _bookCover: string | undefined;

  get bookCover(): string | undefined {
    if (this._book.cover) {
      return 'data:image/jpg;base64,' + this._book.cover
    }
    return 'https://source.unsplash.com/user/c_v_r/1900x800';
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
}
