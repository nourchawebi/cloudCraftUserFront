import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {UserprofileService} from "../../../FrontOffice/services/userprofile/userprofile.service";

@Injectable({
  providedIn: 'root'
})
export class BookstatserviceService {
  private baseUrl = 'http://localhost:8081/bookstats';

  constructor(private http: HttpClient,
              private up:UserprofileService) { }

  countTotalBooks() {
    const headers = this.up.createAuthorization();
    return this.http.get<any>(`${this.baseUrl}/totalBooks`, {headers});
  }

  countBooksByCategory() {
    const headers = this.up.createAuthorization();
    return this.http.get<any>(`${this.baseUrl}/booksByCategory`, {headers});
  }

  getAvailableVsUnavailableBooks() {
    const headers = this.up.createAuthorization();
    return this.http.get<any>(`${this.baseUrl}/availableVsUnavailableBooks`, {headers});
  }

  countBooksCreationByMonth() {
    const headers = this.up.createAuthorization();
    return this.http.get<any>(`${this.baseUrl}/booksCreationByMonth`, {headers});
  }

  countAvailableBooks() {
    const headers = this.up.createAuthorization();
    return this.http.get<any>(`${this.baseUrl}/availableBooks`, {headers});
  }

  countUnavailableBooks() {
    const headers = this.up.createAuthorization();
    return this.http.get<any>(`${this.baseUrl}/unavailableBooks`, {headers});
  }
}
