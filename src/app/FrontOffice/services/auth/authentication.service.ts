import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {RegisterRequest} from "../../models/register-request";
import {AuthenticationResponse} from "../../models/authentication-response";
import {VerificationRequest} from "../../models/verification-request";
import {AuthenticationRequest} from "../../models/authentication-request";
import {ForgotPasswordRequest} from "../../models/forgot-password-request";
import {ResetPasswordRequest} from "../../models/reset-password-request";
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from "@angular/router";
import {TokenInfos} from "../../models/token-infos";
import {ChangePasswordRequest} from "../../models/change-password-request";
import {BehaviorSubject} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl : string ='http://localhost:8081/register'
  private baseUrl2 : string ='http://localhost:8081/login'
  private baseUrl3 : string ='http://localhost:8081/getclasstypes'
  private userPayload:any;
  private loggedUser:any;
  constructor( private http: HttpClient, private router: Router

  ) {
    this.userPayload = this.decodedToken();


  }
  private jwtHelper: JwtHelperService = new JwtHelperService();
  getClasseType() {

    return this.http.get<any>(`${this.baseUrl3}`);
  }

   register(
     registerRequest:RegisterRequest
 , image:any )
   {
     const formData = new FormData();
     formData.append('firstName', registerRequest.firstName|| '');
     formData.append('lastName', registerRequest.lastName|| '');
     formData.append('email', registerRequest.email|| '');
     formData.append('password', registerRequest.password|| '');
     if (registerRequest.mfaEnabled !== undefined) {
       formData.append('mfaEnabled', registerRequest.mfaEnabled.toString());
     }


     if (registerRequest.birthDate !== undefined) {
         formData.append('birthDate', registerRequest.birthDate.toString());
     }// Ensure proper date format
     formData.append('classType', registerRequest.classType|| '');
     formData.append('picture', image);

     return this.http.post<AuthenticationResponse>(`${this.baseUrl}`, formData)
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
  sendverifmail(email: string) {
    const params = new HttpParams().set('email', email);
    return this.http.get<any>(`${this.baseUrl}/resendToken`, { params });
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
  getEnabled(email:string)
  { const params = new HttpParams().set('email', email);
    return this.http.get<boolean>(
      `http://localhost:8081/getenabled`,{params})
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
  createAuthorization(): HttpHeaders {
    let authHeader = new HttpHeaders();
    const token = this.getToken();
    if (token) {
      authHeader = authHeader.set('Authorization', 'Bearer ' + token);
    }
    return authHeader;
  }
  signOut(){
    const headers = this.createAuthorization();
    return this.http.post(
      `http://localhost:8081/logouts`,null, {headers});

  }

  changeEmailAndUpdateToken(newEmail: string): void {

    this.signOut()
  }


  recognizeText(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<any>(`${this.baseUrl}/ocr`, formData);
  }
  private previewImageSource = new BehaviorSubject<string>('');
  previewImage$ = this.previewImageSource.asObservable();

  setPreviewImage(image: string) {
    this.previewImageSource.next(image);
  }
  getimg()
  {return this.previewImageSource}

}
