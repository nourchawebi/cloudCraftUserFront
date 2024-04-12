import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/auth/authentication.service";
import {Router} from "@angular/router";
import {UserprofileService} from "../../services/userprofile/userprofile.service";
import {UserstoreService} from "../../services/uerstore/userstore.service";
import {TokenInfos} from "../../models/token-infos";
import {AuthenticationRequest} from "../../models/authentication-request";
import {ResetPasswordRequest} from "../../models/reset-password-request";
import {ChangePasswordRequest} from "../../models/change-password-request";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.css']
})
export class EditProfilePageComponent  implements OnInit  {
  defaultDate: string = '01-01-2024';
  constructor(private userProfileService: UserprofileService,
              private router:Router,
              private userStore:UserstoreService,
              private  authService:AuthenticationService,private formBuilder: FormBuilder

  ) {
    this.personaldata= this.formBuilder.group({
      firstName: ['', [Validators.required,  Validators.min(5),
        Validators.max(12),]],
      lastName:  [{ value: this.loggedUser.lastName, disabled: !this.editMode }, Validators.required],

      classType: [{ value: this.loggedUser.classeType, disabled: !this.editMode }, Validators.required],

      birthDate: [{ value: this.loggedUser.birthDate, disabled: !this.editMode },, Validators.required],
    });
    this.emailForm= this.formBuilder.group({
      email: [{ value:  this.loggedUser.email, disabled:true},  [Validators.required]]

    });


    this.passwordForm=this.formBuilder.group(
      {
        currentPassword:['',Validators.required],
        newPassword:['',Validators.required],
        confirmPassword:['',Validators.required],

      })
  }
  changePasswordRequest: ChangePasswordRequest= {};
  editMode:boolean = false;
personaldata: FormGroup;
  emailForm: FormGroup;
  passwordForm:FormGroup;
  message:string='';
  error:string='';
  public users:any = [];
  public role!:string;
 public loggedUser:TokenInfos={};
public fullName:string='';
 public personalInfos:boolean=true;
 public securityPassword:boolean=false;
 public  email:boolean=false;
 public curentEmail:string="";
 activatePersonalInfos()
 {
   this.personalInfos=true;
   this.securityPassword=false;
   this.email=false;
 }
 acrivateSecurityPassword()
 {
   this.personalInfos=false;
   this.securityPassword=true;
   this.email=false;
 }
 activateEmail(){
   this.personalInfos=false;
   this.securityPassword=false;
   this.email=true;
}

  ngOnInit() {

this.userStore.getUser()
  .subscribe(
    val=>{
      const user = this.authService.getLogedUser()
      this.loggedUser = val || user  as TokenInfos
      console.log(this.loggedUser.birthDate)
      this.personaldata= this.formBuilder.group({
        firstName: [{ value: this.loggedUser.firstName, disabled: !this.editMode }, [Validators.required,  Validators.min(5),
          Validators.max(12),]],
        lastName:  [{ value: this.loggedUser.lastName, disabled: !this.editMode }, Validators.required],

        classType: [{ value: this.loggedUser.classeType, disabled: !this.editMode }, Validators.required],

        birthDate: [{ value: this.loggedUser.birthDate, disabled: !this.editMode }, Validators.required],

      });
      this.emailForm= this.formBuilder.group({
        email: [{ value:  this.loggedUser.email, disabled:true},  [Validators.required]]

      });
 this.passwordForm=this.formBuilder.group(
   {
     currentPassword:['',Validators.required],
     newPassword:['',Validators.required],
     confirmPassword:['',Validators.required],

   }
 )

    }
  );
    this.userStore.getEmailFromStore()
      .subscribe(val=>{
        const emailFromToken = this.authService.getEmailFromToken()
        this.curentEmail = val || emailFromToken
      });
    this.userStore.getFirstNameFromStore()
      .subscribe(val=>{
        const fullNameFromToken = this.authService.getfirstNameFromToken()
        this.fullName = val || fullNameFromToken
      });

    this.userStore.getRoleFromStore()
      .subscribe(val=>{
        const roleFromToken = this.authService.getRoleFromToken();
        this.role = val || roleFromToken;
      })
  }

  logout(){
    this.authService.signOut();
  }

  changePassword()
  { this.changePasswordRequest.currentPassword=this.passwordForm.get('currentPassword')?.value;
    this.changePasswordRequest.newPassword=this.passwordForm.get('newPassword')?.value;
    this.changePasswordRequest.confirmPassword=this.passwordForm.get('confirmPassword')?.value;
    this.userProfileService.changePassword(this.changePasswordRequest).subscribe(
      {
        next:(response)=>{
          this.message="password changed successfully"
        },
        error:(error)=>{
          this.error=error.error;

        }

  }
    )
  };
  toggleEditMode(): void {
    this.editMode = !this.editMode;

      // Update the disabled status of form controls based on editMode
      const firstNameControl = this.personaldata.get('firstName');
    const lastNameControl = this.personaldata.get('lastName');
    const classTypeControl = this.personaldata.get('classType');
    const birthDateControl = this.personaldata.get('birthDate');

      if (firstNameControl) {
        if (this.editMode) {
          firstNameControl.enable();

          // Enable other form controls as needed
        } else {
          firstNameControl.disable();

          // Disable other form controls as needed
        }

      }

        if ( lastNameControl) {
          if (this.editMode) {

            lastNameControl.enable();
            // Enable other form controls as needed
          } else {

            lastNameControl.disable();
            // Disable other form controls as needed

          }
    }


    if ( classTypeControl) {
      if (this.editMode) {

        classTypeControl.enable();
        // Enable other form controls as needed
      } else {

        classTypeControl.disable();
        // Disable other form controls as needed

      }
    }


    if (birthDateControl) {
      if (this.editMode) {
        birthDateControl.enable();

        // Enable other form controls as needed
      } else {
        birthDateControl.disable();

        // Disable other form controls as needed
      }

    }
  }

  updateProfile(): void {
    // Logic to save changes to the model (loggedUser) goes here
    console.log('Profile updated:', this.loggedUser);
    this.editMode = false; // Disable edit mode after saving changes
  }

}
