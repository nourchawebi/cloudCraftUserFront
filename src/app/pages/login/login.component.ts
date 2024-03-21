import { Component } from '@angular/core';
import {RegisterRequest} from "../../models/register-request";
import {AuthenticationResponse} from "../../models/authentication-response";
import {AuthenticationRequest} from "../../models/authentication-request";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {VerificationRequest} from "../../models/verification-request";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authRequest: AuthenticationRequest= {}; // empty object
  authResponse: AuthenticationResponse={};
  otpCode:any;
  constructor(private authService: AuthenticationService,
              private router:Router
  ) {
  }

  authenticate(){
 this.authService.login(this. authRequest).
 subscribe(
   {
     next:(response)=>{
  this.authResponse=response;
  if(!this.authResponse.mfaEnabled)
  {   localStorage.setItem('token',response.accessToken as string);
    this.router.navigate(['welcome'])

  }
     }
   }
 )
  }
  verifyCode()
  {
    const verificationRequest:VerificationRequest={
      email:this. authRequest.email,
      code:this.otpCode
    }
    this.authService.verifyCode(verificationRequest)
      .subscribe({
          next:(response)=>{
               localStorage.setItem('token',response.accessToken as string);
              this.router.navigate(['welcome']);

          }
        }

      )
  }


}
