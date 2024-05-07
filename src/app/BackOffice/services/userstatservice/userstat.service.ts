import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../FrontOffice/services/auth/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class UserstatService {
  private baseUrl : string ='http://localhost:8081/admin'

  constructor(private http: HttpClient, private router: Router,
              private authService: AuthenticationService,
  ) { }
  createAuthorization(): HttpHeaders {
    let authHeader = new HttpHeaders();
    const token = this.authService.getToken();
    if (token) {
      authHeader = authHeader.set('Authorization', 'Bearer ' + token);
    }
    return authHeader;
  }
  getUsersByMonth() {
    const headers = this.createAuthorization();
    return this.http.get<any>(`${this.baseUrl}/count-by-month-sql`, {headers});
  }
  getUsersLockedByMonth() {
    const headers = this.createAuthorization();
    return this.http.get<any>(`${this.baseUrl}/count-by-locked-month-sql`, {headers});
  }
  countUserByClass() {
    const headers = this.createAuthorization();
    return this.http.get<any>(`${this.baseUrl}/count-user-by-class`, {headers});
  }
  countsessionsperday() {
    const headers = this.createAuthorization();
    return this.http.get<any>(`${this.baseUrl}/session_per_day`, {headers});
  }
  nbrofusersthisyear() {
    const headers = this.createAuthorization();
    return this.http.get<any>(`${this.baseUrl}/count/current-year`, {headers});
  }

  numberofdisabledusers() {
    const headers = this.createAuthorization();
    return this.http.get<any>(`${this.baseUrl}/count/current-year-disabled`, {headers});
  }
  userslogedwithcard() {
    const headers = this.createAuthorization();
    return this.http.get<any>(`${this.baseUrl}/count/users-without-at`, {headers});
  }

}
