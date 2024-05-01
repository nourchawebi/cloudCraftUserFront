import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Book} from "../../models/book/book";
import {BookResponse} from "../../models/book/book-response";
import {PageResponseBookResponse} from "../../models/book/page-response-book-response";
import {BookBorrowResonse} from "../../models/book/book-borrow-resonse";
import {PageResponseBookBorrowResponse} from "../../models/book/page-response-book-borrow-response";
import {Category} from "../../models/book/category";
import {BookResquest} from "../../models/book/book-resquest";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8080/book';
  constructor(private http: HttpClient) {}
/*Book Services*/
  /*Add*/
  addBook(dto: any): Observable<Book> {
    return this.http.post<Book>(`${this.baseUrl}/addBook/${dto.categoryId}`, dto.bookData);
  }
/*Retrieve by id*/
  findById(id: number): Observable<BookResponse> {
    return this.http.get<BookResponse>(`${this.baseUrl}/findBooksByid/${id}`);
  }
/*Read All*/
  findAll(page: number , size: number): Observable<PageResponseBookResponse> {
    return this.http.get<PageResponseBookResponse>(`${this.baseUrl}/findAll?page=${page}&size=${size}`);
  }
  /*Find all by user*/
  findAllByUser(page: number , size: number): Observable<PageResponseBookResponse> {
    return this.http.get<PageResponseBookResponse>(`${this.baseUrl}/findBooksByUser?page=${page}&size=${size}`);
  }

  /*Delete*/
  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteBook/${id}`);
  }
  /*Update*/
  updateBook(dto:any) : Observable<any>{
    return this.http.post(`${this.baseUrl}/updateBook`,dto.bookData )
  }


  /*Book Borrow Services*/
  /*Add*/
  borrowBook(id: number): Observable<any> {
    const url = `${this.baseUrl}/borrowBook/${id}`;
    return this.http.post<any>(url, {}).pipe(
      catchError(this.handleError)
    );
  }
  /*Find all by user*/
  findBookBorrowsByUser(page: number , size: number): Observable<PageResponseBookBorrowResponse> {
    return this.http.get<PageResponseBookBorrowResponse>(`${this.baseUrl}/findBookLoansByUser?page=${page}&size=${size}`);
  }
  /*Return Book*/
  returnBook(idBook: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/returnBook/${idBook}`, {});
  }

  private handleError(error: HttpResponse<any>) {
    // Log the error, handle specific error cases, and return a user-facing error message
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }

}
