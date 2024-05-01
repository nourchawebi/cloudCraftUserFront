import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegisterRequest} from "../../models/register-request";
import {AuthenticationResponse} from "../../models/authentication-response";
import {MyErrorStateMatcher} from "../register/MyErrorStateMatcher";
import {AuthenticationService} from "../../services/auth/authentication.service";
import {Router} from "@angular/router";
import {VerificationRequest} from "../../models/verification-request";
import {ImageModel} from "../../models/ImageOCR";
import {WebcameraComponent} from "../webcamera/webcamera.component";
import {WebcamImage} from "ngx-webcam";

@Component({
  selector: 'app-register-simple',
  templateUrl: './register-simple.component.html',
  styleUrls: ['./register-simple.component.css']
})
export class RegisterSimpleComponent {


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
              private formBuilder: FormBuilder,

  )
  {
    this.stepOneForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      classType: ['', Validators.required],
      birthDate: ['', Validators.required],
      picture: ['', Validators.required],

    });
    this.stepTwoForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.stepThreeForm = this.formBuilder.group({

      password: ['', [Validators.required,
        Validators.minLength(8),   Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/),
        Validators.maxLength(11)]

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
  registerUser()
  { this.message='wait we are sending a verif email';
    this.registerRequest.firstName = this.stepOneForm.get('firstName')?.value;
    this.registerRequest.lastName = this.stepOneForm.get('lastName')?.value;
    this.registerRequest.classType = this.stepOneForm.get('classType')?.value;
    this.registerRequest.birthDate = this.stepOneForm.get('birthDate')?.value;
    this.registerRequest.email = this.stepTwoForm.get('email')?.value;
    this.registerRequest.password = this.stepThreeForm.get('password')?.value;
    this.registerRequest.mfaEnabled = this.stepThreeForm.get('mfaEnabled')?.value;


    this.authService.register(this.registerRequest,this.imageModel)
      .subscribe({
        next:(response)=>{
          this.message="";
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
            },5000)
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
  imageModel: ImageModel = new ImageModel();
  onFileSelected(event: any) {
    this.imageModel= event.target.files[0];
  }
  isCameraMode = false;
  toggleCameraMode(): void {
    this.isCameraMode = !this.isCameraMode;
  }
  @ViewChild('myModal') myModal!: ElementRef;

  openModal(): void {
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      modalElement.classList.add('show');
      modalElement.style.display = 'block';
      this.isCameraMode = !this.isCameraMode;
    }
  }

  closeModal(): void {
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      modalElement.classList.remove('show');
      modalElement.style.display = 'none';
      this.isCameraMode = !this.isCameraMode;



    }
  }


}
