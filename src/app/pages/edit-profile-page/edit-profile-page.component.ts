import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/auth/authentication.service";
import {Router} from "@angular/router";
import {UserprofileService} from "../../services/userprofile/userprofile.service";
import {UserstoreService} from "../../services/uerstore/userstore.service";
import {TokenInfos} from "../../models/token-infos";

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.css']
})
export class EditProfilePageComponent  implements OnInit  {
  constructor(private userProfileService: UserprofileService,
              private router:Router,
              private userStore:UserstoreService,
              private  authService:AuthenticationService
  ) {
  }
  public users:any = [];
  public role!:string;
 public loggedUser:TokenInfos={};
  public fullName : string = "";
  public email: string = "";

  ngOnInit() {

this.userStore.getUser()
  .subscribe(
    val=>{
      const user = this.authService.getLogedUser()
      this.loggedUser = val || user  as TokenInfos

    }
  );
    this.userStore.getEmailFromStore()
      .subscribe(val=>{
        const emailFromToken = this.authService.getEmailFromToken()
        this.email = val || emailFromToken
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

}
