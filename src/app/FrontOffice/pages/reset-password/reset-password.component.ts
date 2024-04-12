import { Component } from '@angular/core';
import {ResetPasswordRequest} from "../../models/reset-password-request";
import {AuthenticationService} from "../../services/auth/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
     resetPwdRequest:ResetPasswordRequest={};
  message:string="";
  error:string="";
  constructor(private authService: AuthenticationService,
              private router:Router
  ) {
  }
  resetPassword()
  {  this.authService.resetPassword(this.resetPwdRequest)
    .subscribe(

      {
        next:(response)=>{
          if(response)
          {
            this.message=response;
          }
          else {
            this.message='password changed successfully! u will be redirected to the login page';
            setTimeout(()=>{
              this.router.navigate(['login']);
            },2000)
          }
        },
        error:(error)=>{
          if (error.status === 500 && error.error && error.error.message === 'Password are not the same') {
            error = 'Passwords do not match'; // Handle specific error message
          } else {
            error = 'Something went wrong';
          }
        }
      }
    )


  }

}
