import { Component } from '@angular/core';
import {RegisterRequest} from "../../models/register-request";
import {AuthenticationResponse} from "../../models/authentication-response";
import {AuthenticationService} from "../../services/auth/authentication.service";
import {Router} from "@angular/router";
import {VerificationRequest} from "../../models/verification-request";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  registerRequest: RegisterRequest= {}; // empty object
  authResponse: AuthenticationResponse={};
  message:string ='';
  error:string='';
  otpCode:string='';
  constructor(private authService: AuthenticationService,
              private router:Router
  ) {
  }
  registerUser()
  { this.message='wait we are sending a verif email';
    this.authService.register(this.registerRequest)
      .subscribe({
        next:(response)=>{
        // next will have the response
            if(response)
            { this.error = '';
              this.authResponse=response;
            }
            else {
              this.error = '';
              this.message='account created  successfully verify your email \n you will be redirected to the login page in 3 seconds';
              setTimeout(()=>{
this.router.navigate(['login'])
              },3000)
            }
        },
        error: (error) => { if (error.status === 409) {
          this.message='';
          this.error = 'User already exists';
        } else {
          this.message='';
          this.error = 'Error occurred during registration';
        }
          console.error(error);
        }
      });
  }

  verifyTfa(){
    this.message="";
    const verificationRequest:VerificationRequest={
      email:this.registerRequest.email,
      code:this.otpCode
    }
    this.authService.verifyCode(verificationRequest)
      .subscribe({
        next:(response)=>{
          this.message='account created  successfully verify your email \n you will be redirected to the login page in 3 seconds';
          setTimeout(()=>{
            localStorage.setItem('token',response.accessToken as string);
            this.router.navigate(['login'])
          },3000)
        }
        }

      )
  }

}
