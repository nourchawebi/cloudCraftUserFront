import { Component } from '@angular/core';
import {RegisterRequest} from "../../models/register-request";
import {AuthenticationResponse} from "../../models/authentication-response";
import {AuthenticationService} from "../../services/authentication.service";
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
  otpCode:string='';
  constructor(private authService: AuthenticationService,
              private router:Router
  ) {
  }
  registerUser()
  { this.message='';
    this.authService.register(this.registerRequest)
      .subscribe({
        next:(response)=>{ // next will have the response
            if(response)
            {
              this.authResponse=response;
            }
            else {
              this.message='account created  successfully verify your email \n you will be redirected to the login page in 3 seconds';
              setTimeout(()=>{
this.router.navigate(['login'])
              },3000)
            }
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
