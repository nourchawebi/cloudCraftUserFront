import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {bookCategory} from "../models/bookCategory";
import {Book} from "../models/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8080/book';
  constructor(private http: HttpClient) {}

  addBook(dto: any): Observable<Book> {
    return this.http.post<Book>(`${this.baseUrl}/addBook/${dto.userId}/${dto.categoryId}`, dto.bookData);
  }
}
