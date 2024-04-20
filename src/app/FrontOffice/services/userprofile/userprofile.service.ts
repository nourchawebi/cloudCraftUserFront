import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {ResetPasswordRequest} from "../../models/reset-password-request";
import {ChangePasswordRequest} from "../../models/change-password-request";
import {catchError, throwError} from "rxjs";
import {AuthenticationService} from "../auth/authentication.service";
import {ChangeEmailRequest} from "../../models/change-email-request";
import {ChangeInfosRequest} from "../../models/change-infos-request";

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {
  private baseUrl : string ='http://localhost:8081/user'
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
  changePassword(changePasswordRequest: ChangePasswordRequest)
  {  const headers = this.createAuthorization();
    return this.http.patch<any>(`${this.baseUrl}/updatepassword`, changePasswordRequest, {headers})

  }
  changeEmail(changeEmailRequest: ChangeEmailRequest)
  {  const headers = this.createAuthorization();
    return this.http.patch<any>(`${this.baseUrl}/updateEmail`, changeEmailRequest, {headers})

  }
  changeinfos(changeInfosRequest: ChangeInfosRequest)
  {  const headers = this.createAuthorization();
    return this.http.patch<any>(`${this.baseUrl}/updatePersonalData`, changeInfosRequest, {headers})

  }

}
