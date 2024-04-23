import {Component, OnInit} from '@angular/core';
import {RegisterRequest} from "../../models/register-request";
import {AuthenticationResponse} from "../../models/authentication-response";
import {AuthenticationService} from "../../services/auth/authentication.service";
import {Router} from "@angular/router";
import {VerificationRequest} from "../../models/verification-request";
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {MyErrorStateMatcher} from "./MyErrorStateMatcher";
import {passwordValidator} from "./passwordValidator";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  stepOneForm: FormGroup;
  stepThreeForm: FormGroup;
  stepTwoForm: FormGroup;
  registerRequest: RegisterRequest= {}; // empty object
  authResponse: AuthenticationResponse={};
  message:string ='';
  error:string='';
  otpCode:string='';
  matcher = new MyErrorStateMatcher();
 StrongPasswordRegx: RegExp =
    /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
  constructor(private authService: AuthenticationService,
              private router:Router,
              private formBuilder: FormBuilder
  )
  {
    this.stepOneForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      classType: ['', Validators.required],
      birthDate: ['', Validators.required]
    });
    this.stepTwoForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.stepThreeForm = this.formBuilder.group({

      password: ['', Validators.required, //Validators.pattern(this.StrongPasswordRegx),
       // Validators.minLength(8)

         ],


      mfaEnabled: [false]
    });
  }
  classeType: string[] = [];

  getClasseType()
  {
    this.authService.getClasseType().subscribe(
      {
        next:(response)=>{
          this.classeType=response;
  }}
    )
  }
  ngOnInit(): void {
    this.getClasseType();

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
