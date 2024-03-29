import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {RegisterRequest} from "../../models/register-request";
import {AuthenticationResponse} from "../../models/authentication-response";
import {VerificationRequest} from "../../models/verification-request";
import {AuthenticationRequest} from "../../models/authentication-request";
import {ForgotPasswordRequest} from "../../models/forgot-password-request";
import {ResetPasswordRequest} from "../../models/reset-password-request";
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from "@angular/router";
import {TokenInfos} from "../../models/token-infos";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl : string ='http://localhost:8081/register'
  private baseUrl2 : string ='http://localhost:8081/login'
  private userPayload:any;
  private loggedUser:any;
  constructor( private http: HttpClient, private router: Router) {
    this.userPayload = this.decodedToken();


  }
   register(
     registerRequest:RegisterRequest
   )
   {
     return this.http.post<AuthenticationResponse>
     (`${this.baseUrl}`, registerRequest)
   }
   login(authRequest:AuthenticationRequest)
   {
     return this.http.post<AuthenticationResponse>
     (`${this.baseUrl2}`, authRequest)

   }
   verifyCode(verificationRequest:VerificationRequest)
   {
     return this.http.post<AuthenticationResponse>
     (`${this.baseUrl2}/verify`, verificationRequest)
   }

   forgotPassword(forgotPwdRequest:ForgotPasswordRequest)
   {    if (forgotPwdRequest.email) {
     const params = new HttpParams().set('email', forgotPwdRequest.email);

     return this.http.get<any>(`${this.baseUrl2}/forgotPassword`, { params });
   } else {
     // Handle the case when email is undefined or null
     throw new Error('Email is not provided.');
   }
   }
   resetPassword(resetPwdRequest:ResetPasswordRequest)
   {
   return this.http.patch<any>(
     `${this.baseUrl2}/setnewpassword`,resetPwdRequest)
   }
  getToken(){
    return localStorage.getItem('token')
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token')
  }

  decodedToken(){
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
   // console.log(jwtHelper.decodeToken(token))
    return jwtHelper.decodeToken(token)
  }

  getfirstNameFromToken(){
    if(this.userPayload)
      return this.userPayload.firstName;
  }

  getRoleFromToken(){
    if(this.userPayload)
      return this.userPayload.role;
  }
  getEmailFromToken(){
    if(this.userPayload)
      return this.userPayload.email;
  }
  getLogedUser()
  {
    if(this.userPayload)

      return this.userPayload;
  }
  signOut(){
    localStorage.clear();
    this.router.navigate(['login'])
  }


}
