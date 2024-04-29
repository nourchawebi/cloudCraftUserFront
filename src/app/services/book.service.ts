import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../models/book";
import {BookResponse} from "../models/book-response";
import {PageResponseBookResponse} from "../models/page-response-book-response";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8080/book';
  constructor(private http: HttpClient) {}

  addBook(dto: any): Observable<Book> {
    return this.http.post<Book>(`${this.baseUrl}/addBook/${dto.categoryId}`, dto.bookData);
  }

  findById(id: number): Observable<BookResponse> {
    return this.http.get<BookResponse>(`${this.baseUrl}/findBooksByid/${id}`);
  }

  findAll(page: number , size: number): Observable<PageResponseBookResponse> {
    return this.http.get<PageResponseBookResponse>(`${this.baseUrl}/findAll?page=${page}&size=${size}`);
  }
  findAllByUser(page: number , size: number): Observable<PageResponseBookResponse> {
    return this.http.get<PageResponseBookResponse>(`${this.baseUrl}/findBooksByUser?page=${page}&size=${size}`);
  }
  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteBook/${id}`);
  }

}
