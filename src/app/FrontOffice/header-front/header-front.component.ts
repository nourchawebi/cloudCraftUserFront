import {Component, OnInit} from '@angular/core';
import {TokenInfos} from "../models/token-infos";
import {UserprofileService} from "../services/userprofile/userprofile.service";
import {Router} from "@angular/router";
import {UserstoreService} from "../services/uerstore/userstore.service";
import {AuthenticationService} from "../services/auth/authentication.service";

@Component({
  selector: 'app-header-front',
  templateUrl: './header-front.component.html'
})
export class HeaderFrontComponent  implements OnInit   {
  constructor(private userProfileService: UserprofileService,
              private router:Router,
              private userStore:UserstoreService,
              private  authService:AuthenticationService
  ) {
  }
  public loggedUser:TokenInfos={};
  ngOnInit() {

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
    localStorage.removeItem('token');
    // Redirect to the logout page or perform any other necessary actions
  }
  public fullName : string = "";

}
