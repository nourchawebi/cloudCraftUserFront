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
