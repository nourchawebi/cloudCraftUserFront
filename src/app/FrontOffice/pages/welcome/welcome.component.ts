import { Component } from '@angular/core';
import {UserprofileService} from "../../services/userprofile/userprofile.service";
import {Router} from "@angular/router";
import {UserstoreService} from "../../services/uerstore/userstore.service";
import {AuthenticationService} from "../../services/auth/authentication.service";
import {TokenInfos} from "../../models/token-infos";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private userProfileService: UserprofileService,
              private router:Router,
              private userStore:UserstoreService,
              private  authService:AuthenticationService
  ) {
  }
  public loggedUser:TokenInfos={};
  imageUrl: string="";
  ngOnInit() {


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


        }
      );}
  isLoggedIn(): boolean {
    if (!localStorage.getItem('token')) {

      return false;
    }
    return true;
  }
  logout() {
    // Perform logout actions here, such as deleting the token
    // Example code to delete the token from localStorage:


    this.authService.signOut().subscribe(
      {
        next:()=>{
          localStorage.removeItem('token');
          this.router.navigate(['login'])
        }}

    );

    // window.location.reload(); // Refresh the page
  }
  public fullName : string = "";

}
