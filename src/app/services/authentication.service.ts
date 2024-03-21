import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterRequest} from "../models/register-request";
import {AuthenticationResponse} from "../models/authentication-response";
import {VerificationRequest} from "../models/verification-request";
import {AuthenticationRequest} from "../models/authentication-request";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl : string ='http://localhost:8081/register'
  private baseUrl2 : string ='http://localhost:8081/login'
  constructor( private http: HttpClient) {

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
}
