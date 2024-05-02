import { Injectable } from '@angular/core';
import {catchError, throwError} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../FrontOffice/services/auth/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class LockuserserviceService {

  private baseUrl2: string ='http://localhost:8081/admin';
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
  getusers()
  {  const headers = this.createAuthorization();
    return this.http.get(`${this.baseUrl2}/allusers`, {headers})
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


  lockUser(email: string,unlockdate: string) {
    const headers = this.createAuthorization();
    const params = new HttpParams()
      .set('email', email)
      .set('unlockdate',unlockdate);


    return this.http.patch<any>(`${this.baseUrl2}/lock`, null, { params, headers });
  }
  unlockUser(email: string) {
    const headers = this.createAuthorization();
    const params = new HttpParams()
      .set('email', email)

    ;
    return  this.http.patch<any>(`${this.baseUrl2}/unlock`, null,{params,headers }); // Replace with your API endpoint


  }
}
