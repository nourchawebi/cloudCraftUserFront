import { Component } from '@angular/core';
import {AuthenticationService} from "../../services/auth/authentication.service";
import {Router} from "@angular/router";
import {ImageModel} from "../../models/ImageOCR";

@Component({
  selector: 'app-registerimg',
  templateUrl: './registerimg.component.html',
  styleUrls: ['./registerimg.component.css']
})
export class RegisterimgComponent {
constructor(private authService: AuthenticationService,
            private router:Router,) {
}
message:string="";
error:string="";
  imageModel: ImageModel = new ImageModel();
  onFileSelected(event: any) {
    this.imageModel.file = event.target.files[0]; // Store the selected file in the image model
  }

  registerWithOCR() {
    if (this.imageModel.file) {
      this.authService.recognizeText(this.imageModel.file).subscribe(
        {
          next:()=>{
            this.message='account created  successfully verify your email \n you will be redirected to the login page in 3 seconds';
            setTimeout(()=>{
              this.router.navigate(['login'])
            },5000)
          }
        ,
        error: (error) => { if (error.status === 409) {
        this.message='';
        this.error = 'User already exists';
      } else {
        this.message='';
        this.error = 'Error occurred during registration';
      }
        console.error(error);


      }
        }
      );
    } else {
      console.error('No file selected.');
      // Handle case where no file is selected
    }
  }
}
