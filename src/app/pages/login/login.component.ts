import { Component } from '@angular/core';
import {RegisterRequest} from "../../models/register-request";
import {AuthenticationResponse} from "../../models/authentication-response";
import {AuthenticationRequest} from "../../models/authentication-request";
import {AuthenticationService} from "../../services/auth/authentication.service";
import {Router} from "@angular/router";
import {VerificationRequest} from "../../models/verification-request";
import {ForgotPasswordRequest} from "../../models/forgot-password-request";
import {UserstoreService} from "../../services/uerstore/userstore.service";
//import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authRequest: AuthenticationRequest= {}; // empty object
  authResponse: AuthenticationResponse={};
  otpCode:any;
  forgotPwdRequest:ForgotPasswordRequest={};
  constructor(private authService: AuthenticationService,
              private router:Router,   // private toast: NgToastService,
              private userStore: UserstoreService
  ) {
  }

  error:string='';
  message:any='';
  forgotpassword:boolean=false;
  authenticate(){
 this.authService.login(this. authRequest).
 subscribe(
   {
     next:(response)=>{
  this.authResponse=response;
  if(!this.authResponse.mfaEnabled)
  {   localStorage.setItem('token',response.accessToken as string);
    const tokenPayload = this.authService.decodedToken();
    this.userStore.setFirstNameForStore(tokenPayload.name);
    this.userStore.setRoleForStore(tokenPayload.role);
    this.userStore.setUser(tokenPayload);
    this.userStore.setEmailForStore(tokenPayload.email);
    this.message="u will redirected to welcome page"
   // this.toast.success({detail:"SUCCESS", summary:response.accessToken, duration: 5000});

    this.router.navigate(['welcome'])

  }
     },
     error: (error) => { if (error.status === 403) {
       this.error = 'User disabled';
     } else {
       this.error = 'bad credentials';
     }
       console.error(error);
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
  activeforgotpassword()
  {
    this.forgotpassword=true;
  }
  sendResetMail()
  {   this.message = 'Please wait, we are verifying...'; // Show the initial message
    this.authService.forgotPassword(this.forgotPwdRequest)
    .subscribe(
      {
        next:(response)=>{
          if(response)
          {
            this.authResponse=response;
          }
          else {
            this.message='Email sent! \n you will be redirected to the login page in 3 seconds';
            setTimeout(()=>{
              this.message="";
              this.error="";
             this.forgotpassword=false;
            },3000)
          }
        },
        error: (error) => { if (error.status === 401) {
          this.message="";
          this.error = 'User not found';
        } else {
          this.message="";
          this.error = 'error has accured';
        }
          console.error(error);
        }
      }
    )

  }

}
