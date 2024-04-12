import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {ResetPasswordRequest} from "../../models/reset-password-request";
import {ChangePasswordRequest} from "../../models/change-password-request";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {
  private baseUrl : string ='http://localhost:8081/user'
  constructor(private http: HttpClient, private router: Router) { }
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
  changePassword(changePasswordRequest: ChangePasswordRequest)
  {  const headers = this.getHeaders();
    return this.http.patch<any>(`${this.baseUrl}/updatePassword`, changePasswordRequest, { headers })
      .pipe(
        catchError(error => {
          if (error.status === 0) {
            console.error('Failed to connect to the server.');
          } else if (error.status === 403) {
            console.error('Access forbidden. Check CORS configuration.');
          } else {
            console.error('An error occurred:', error.error.message || error.statusText);
          }
          return throwError(error);
        })
      );
  }
}
