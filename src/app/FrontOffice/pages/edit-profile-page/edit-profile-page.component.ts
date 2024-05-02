import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/auth/authentication.service";
import {Router} from "@angular/router";
import {UserprofileService} from "../../services/userprofile/userprofile.service";
import {UserstoreService} from "../../services/uerstore/userstore.service";
import {TokenInfos} from "../../models/token-infos";
import {AuthenticationRequest} from "../../models/authentication-request";
import {ResetPasswordRequest} from "../../models/reset-password-request";
import {ChangePasswordRequest} from "../../models/change-password-request";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ChangeEmailRequest} from "../../models/change-email-request";
import {ChangeInfosRequest} from "../../models/change-infos-request";
import {formatDate} from "@angular/common";
import {ImageModel} from "../../models/ImageOCR";


@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.css']
})
export class EditProfilePageComponent  implements OnInit  {
  activeTab: string = 'personalInfos';
  emailVerif: boolean = true; // Default value assuming email is valid

  checkEmailValidity(): void {
    if(this.loggedUser.email)
    {
    if (!this.loggedUser.email.includes('.') && !this.loggedUser.email.includes('@')) {
      this.emailVerif = false;
    } else {
      this.emailVerif = true;
    }}
  }

  constructor(private userProfileService: UserprofileService,
              private router:Router,
              private userStore:UserstoreService,
              private  authService:AuthenticationService,private formBuilder: FormBuilder

  ) {
    this.changePasswordRequest = {};
    this.personaldata= this.formBuilder.group({
      firstName: ['', [Validators.required,  Validators.min(5),
        Validators.max(12),]],
      lastName:  [{ value: this.loggedUser.lastName, disabled: !this.editMode }, Validators.required],

      classType: [{ value: this.loggedUser.classeType, disabled: !this.editMode }, Validators.required],

      birthDate: [{ value: this.loggedUser.birthDate, disabled: !this.editMode },, Validators.required],

    });
    this.emailForm= this.formBuilder.group({
      email: [{ value:  this.loggedUser.email, disabled:true},  [Validators.required]],
      newEmail: ['', [Validators.required, Validators.email]]

    });


    this.passwordForm=this.formBuilder.group(
      {
        currentPassword:['',Validators.required],
        newPassword:['',Validators.required],
        confirmationPassword:['',Validators.required],

      })
  }

  changePasswordRequest: ChangePasswordRequest= {};
  changeEmailRequest: ChangeEmailRequest= {};
  changeInfosRequest: ChangeInfosRequest= {};
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
 activatePersonalInfos(tab: string)
 {
   this.personalInfos=true;
   this.securityPassword=false;
   this.email=false;
   this.message="";
   this.error="";
   this.activeTab = tab;

 }
 acrivateSecurityPassword(tab: string)
 {
   this.personalInfos=false;
   this.securityPassword=true;
   this.email=false;
   this.message="";
   this.error="";
   this.activeTab = tab;
 }
 activateEmail(tab: string){
   this.personalInfos=false;
   this.securityPassword=false;
   this.email=true;
   this.activeTab = tab;
   this.message="";
   this.error="";
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
  parseDate(dateString: string): Date {
    const parts = dateString.split('/');
    return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
  }
  picture:string="";
  imageUrl: string="";

  ngOnInit() {
    this. getClasseType();
    this.userProfileService.getImageUrl()
      .subscribe(response => {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageUrl = reader.result as string;
        };
        reader.readAsDataURL(response);
      });





this.userStore.getUser()
  .subscribe(
    val=>{
      const user = this.authService.getLogedUser()
      this.loggedUser = val || user  as TokenInfos
      console.log(this.loggedUser.birthDate)
      if(this.loggedUser.picture!=null)
      {
this.picture="http://localhost:8081/nour/cin.jpg";}
      const birthDateValue = this.loggedUser.birthDate
        ? this.parseDate(this.loggedUser.birthDate)
        : new Date();
      this.personaldata= this.formBuilder.group({
        firstName: [{ value: this.loggedUser.firstName, disabled: !this.editMode }, [Validators.required,  Validators.min(5),
          Validators.max(12),]],
        lastName:  [{ value: this.loggedUser.lastName, disabled: !this.editMode }, Validators.required],

        classType: [{ value: this.loggedUser.classeType, disabled: !this.editMode }, Validators.required],
        birthDate: [
          { value: formatDate(birthDateValue, 'yyyy-MM-dd', 'en'),
          disabled: !this.editMode},  Validators.required
        ],



      });
      this.emailForm= this.formBuilder.group({
        email: [{ value:  this.loggedUser.email, disabled:true},  [Validators.required]],
        newEmail: ['', [Validators.required, Validators.email]]

      });
 this.passwordForm=this.formBuilder.group(
   {
     currentPassword:['',Validators.required],
     newPassword:['',Validators.required],
     confirmationPassword:['',Validators.required],

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

    this.checkEmailValidity();
  }

  logout(){
    this.authService.signOut();
  }

  changePassword()
  { this.changePasswordRequest.currentPassword=this.passwordForm.get('currentPassword')?.value;
    this.changePasswordRequest.newPassword=this.passwordForm.get('newPassword')?.value;
    this.changePasswordRequest.confirmationPassword=this.passwordForm.get('confirmationPassword')?.value;
    this.changePasswordRequest.email=this.loggedUser.email;
    console.log(this.changePasswordRequest.currentPassword);
    console.log(this.changePasswordRequest.newPassword);
    console.log(this.changePasswordRequest.confirmationPassword);
    console.log(this.changePasswordRequest.email);

    this.userProfileService.changePassword(this.changePasswordRequest).subscribe(
      {
        next:(response)=>{
          this.message="password changed successfully";
          this.error=""
        },
        error:(error)=>{
          this.error=error.error.detail;
          this.message="";

        }

      }
    )
  };

 changeEmail()
 { this.changeEmailRequest.currentEmail=this.emailForm.get('email')?.value;
   this.changeEmailRequest.newEmail=this.emailForm.get("newEmail")?.value;
   this.changeEmailRequest.confirmationEmail=this.emailForm.get("newEmail")?.value;
   this.error="";
   this.message="plase wait we are sending an email"
   this.userProfileService.changeEmail(this.changeEmailRequest).subscribe(
     {
       next:(response)=>{
         this.error="";

         this.message="ur email is updated  u have to sign in again !"


         if(this.changeEmailRequest.newEmail!=null)
         {

         this.authService.signOut();}
         else {
           this.message="problem";
         }
       },
       error:(error)=>{
         this.error=error.error;
         this.message="";

       }

     }
   )
 };

  changeInfos()
  {
    this.changeInfosRequest.firstName=this.personaldata.get("firstName")?.value;
    this.changeInfosRequest.lastName=this.personaldata.get("lastName")?.value;
    this.changeInfosRequest.birthDate=this.personaldata.get("birthDate")?.value;
    this.changeInfosRequest.classType=this.personaldata.get("classType")?.value;
    this.userProfileService.changeinfos(this.changeInfosRequest).subscribe(
      {
        next:(response)=>{
          this.error="";
          this.imgmessage="";
          this.imgerror="";

          this.message="personal infos changed success !"
          localStorage.setItem('token',response.accessToken as string);
          const tokenPayload = this.authService.decodedToken();
          this.userStore.setFirstNameForStore(tokenPayload.name);
          this.userStore.setRoleForStore(tokenPayload.role);
          this.userStore.setUser(tokenPayload);
          this.userStore.setEmailForStore(tokenPayload.email);
          this.editMode = false;
        },
        error:(error)=>{
          this.error=error.error;
          this.message="";
          this.imgmessage="";
          this.imgerror="";

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

  enableupdateProfile(): void {
    // Logic to save changes to the model (loggedUser) goes here
    console.log('Profile updated:', this.loggedUser);
    this.editMode = false; // Disable edit mode after saving changes
  }

  imageModel: ImageModel = new ImageModel();
  pictureControl = new FormControl('', Validators.required);
imgmessage:string='';
  imgerror:string='';
  onFileSelected(event: any) {
    this.imageModel= event.target.files[0];

  }
  updateimg()
  {
    if (this.pictureControl.valid) {
    this.userProfileService.changeimage(this.imageModel).subscribe({
      next:()=>{
        this.message="image chnaged"
        window.location.reload();
        this.imgmessage="image chnaged !"

        this.imgerror='';
      }
    })
  }
   else {
  this.imgerror="img required"
      this.imgmessage=""
}
  } }
