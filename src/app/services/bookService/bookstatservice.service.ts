import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookstatserviceService {
  private baseUrl = 'http://localhost:8080/bookstats';

  constructor(private http: HttpClient) { }

  countTotalBooks() {
    return this.http.get<any>(`${this.baseUrl}/totalBooks`);
  }

  countBooksByCategory() {
    return this.http.get<any>(`${this.baseUrl}/booksByCategory`);
  }

  getAvailableVsUnavailableBooks() {
    return this.http.get<any>(`${this.baseUrl}/availableVsUnavailableBooks`);
  }

  countBooksCreationByMonth() {
    return this.http.get<any>(`${this.baseUrl}/booksCreationByMonth`);
  }

  countAvailableBooks() {
    return this.http.get<any>(`${this.baseUrl}/availableBooks`);
  }

  countUnavailableBooks() {
    return this.http.get<any>(`${this.baseUrl}/unavailableBooks`);
  }
}
