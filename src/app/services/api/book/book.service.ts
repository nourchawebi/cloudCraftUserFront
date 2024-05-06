import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Book} from "../../../models/book/book";
import {BookResponse} from "../../../models/book/book-response";
import {PageResponseBookResponse} from "../../../models/book/page-response-book-response";
import {BookBorrowResonse} from "../../../models/book/book-borrow-resonse";
import {PageResponseBookBorrowResponse} from "../../../models/book/page-response-book-borrow-response";
import {Category} from "../../../models/book/category";
import {BookResquest} from "../../../models/book/book-resquest";
import {UserprofileService} from "../../../FrontOffice/services/userprofile/userprofile.service";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8081/book';
  constructor(private http: HttpClient,
              private up:UserprofileService) {}
/*Book Services*/
  /*Add*/
  addBook(dto: any): Observable<Book> {
    const headers = this.up.createAuthorization();
    return this.http.post<Book>(`${this.baseUrl}/addBook/${dto.categoryId}`, dto.bookData, {headers});
  }
/*Retrieve by id*/
  findById(id: number): Observable<BookResponse> {
    const headers = this.up.createAuthorization();
    return this.http.get<BookResponse>(`${this.baseUrl}/findBooksByid/${id}`, {headers});
  }
/*Read All*/
  findAll(page: number , size: number): Observable<PageResponseBookResponse> {
    const headers = this.up.createAuthorization();
    return this.http.get<PageResponseBookResponse>(`${this.baseUrl}/findAll?page=${page}&size=${size}`, {headers});
  }
  /*Find all by user*/
  findAllByUser(page: number , size: number): Observable<PageResponseBookResponse> {
    const headers = this.up.createAuthorization();
    return this.http.get<PageResponseBookResponse>(`${this.baseUrl}/findBooksByUser?page=${page}&size=${size}`, {headers});
  }

  /*Delete*/
  deleteBook(id: number): Observable<any> {
    const headers = this.up.createAuthorization();
    return this.http.delete(`${this.baseUrl}/deleteBook/${id}`, {headers});
  }
  /*Update*/
  updateBook(dto:any) : Observable<any>{
    const headers = this.up.createAuthorization();
    return this.http.post(`${this.baseUrl}/updateBook`,dto.bookData, {headers} )
  }


  /*Book Borrow Services*/
  /*Add*/
  borrowBook(id: number): Observable<any> {
    const headers = this.up.createAuthorization();
    const url = `${this.baseUrl}/borrowBook/${id}`;
    return this.http.post<any>(url, {}, {headers}).pipe(
      catchError(this.handleError)
    );
  }
  /*Find all by user*/
  findBookBorrowsByUser(page: number , size: number): Observable<PageResponseBookBorrowResponse> {
    const headers = this.up.createAuthorization();
    return this.http.get<PageResponseBookBorrowResponse>(`${this.baseUrl}/findBookLoansByUser?page=${page}&size=${size}`, {headers});
  }
  /*Return Book*/
  returnBook(idBook: number): Observable<any> {
    const headers = this.up.createAuthorization();
    return this.http.post<any>(`${this.baseUrl}/returnBook/${idBook}`, {}, {headers});
  }

  private handleError(error: HttpResponse<any>) {
    // Log the error, handle specific error cases, and return a user-facing error message
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }

}
