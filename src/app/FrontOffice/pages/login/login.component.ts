import { Component } from '@angular/core';
import {RegisterRequest} from "../../models/register-request";
import {AuthenticationResponse} from "../../models/authentication-response";
import {AuthenticationRequest} from "../../models/authentication-request";
import {AuthenticationService} from "../../services/auth/authentication.service";
import {Router} from "@angular/router";
import {VerificationRequest} from "../../models/verification-request";
import {ForgotPasswordRequest} from "../../models/forgot-password-request";
import {UserstoreService} from "../../services/uerstore/userstore.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MyErrorStateMatcher} from "../register/MyErrorStateMatcher";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authForm: FormGroup;
  resetPasswordForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  authRequest: AuthenticationRequest= {}; // empty object
  authResponse: AuthenticationResponse={};
  otpCode:string='';
  forgotPwdRequest:ForgotPasswordRequest={};
  constructor(private authService: AuthenticationService,
              private router:Router,   // private toast: NgToastService,
              private userStore: UserstoreService,
              private formBuilder: FormBuilder
  ) {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password:['', Validators.required]
    });
    this. resetPasswordForm = this.formBuilder.group({
      emailreset: ['', [Validators.required, Validators.email]]

    });
  }

  sendveriftoken:boolean=false;
  error:string='';
  message:any='';
  forgotpassword:boolean=false;
  authenticate(){
    this.authRequest.email = this.authForm.get('email')?.value;
    this.authRequest.password = this.authForm.get('password')?.value;
 this.authService.login(this. authRequest).
 subscribe(
   {
     next:(response)=>{
  this.authResponse=response;
  if(!this.authResponse.mfaEnabled)
  {   localStorage.setItem('token',response.accessToken as string);
    this.error ="";
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
     error: (error) => {
       if (error.status === 404) {
         this.error=error.error;

       }else
         if(error.status===403)
         {
         if (error.error === 'User disabled and token expired') {
           this.message="";
           this.error = 'User disabled and token expired';
           this.sendveriftoken=true;

         } else if (error.error === 'User disabled') {
           this.message="";
           this.error = 'User disabled';
         }} else {
         this.message="";
         this.error = 'Bad credentials';
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
               this.error="";
               this.message="success!"
               this.router.navigate(['welcome']);

          },
        error:()=>{
            this.message="";
            this.error="verify your code!"
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
    this.forgotPwdRequest.email = this.resetPasswordForm.get('emailreset')?.value;

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
  sendverifmail() {
    if (this.authRequest.email) {
      this.error="";
      this.message="we're sending an email pls wait ..."

      this.authService.sendverifmail(this.authRequest.email).subscribe(
        {
          next:(response)=>{
            this.error="";
         this.message="email sent with success! please verify your emails ^^"
          },
          error: (error) => {
            if (error.status === 400) {
              console.error('Email already sent and token not expired');
              // Handle the specific error message or display it to the user
            } else {
              console.error('An error occurred:', error);
              // Handle other error cases here
            }
          }
        }
      );
    } else {
      console.error('Email is undefined or null.');
      // Handle the case where email is undefined or null
    }
  }
  onOtpInput(index: number, event: any) {
    // Get the input element by ID
    const inputId = `otp${index}`;
    const inputElement = document.getElementById(inputId) as HTMLInputElement;

    // Update the OTP code
    this.updateOtpCode(index, event.target.value);

    // Move focus to the next input if the current input has a value
    if (event.target.value && index < 6) {
      const nextInputId = `otp${index + 1}`;
      const nextInputElement = document.getElementById(nextInputId) as HTMLInputElement;
      if (nextInputElement) {
        nextInputElement.focus();
      }
    }
  }
  updateOtpCode(index: number, value: string) {
    if (value.length > 0) {
      this.otpCode = this.otpCode.substr(0, index - 1) + value + this.otpCode.substr(index);
    } else {
      this.otpCode = this.otpCode.substr(0, index - 1) + this.otpCode.substr(index);
    }
  }

}
