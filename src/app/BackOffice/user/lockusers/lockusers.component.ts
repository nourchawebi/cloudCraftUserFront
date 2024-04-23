import {Component, OnInit} from '@angular/core';
import {UserprofileService} from "../../../FrontOffice/services/userprofile/userprofile.service";
import {Router} from "@angular/router";
import {UserstoreService} from "../../../FrontOffice/services/uerstore/userstore.service";
import {AuthenticationService} from "../../../FrontOffice/services/auth/authentication.service";
import {FormBuilder} from "@angular/forms";
import {LockuserserviceService} from "../../services/lockuserservice.service";

@Component({
  selector: 'app-lockusers',
  templateUrl: './lockusers.component.html',
  styleUrls: ['./lockusers.component.css']
})
export class LockusersComponent implements OnInit  {
  ngOnInit() {

    this.getUsers();}
  public u:[]=[];
  constructor(private userProfileService: UserprofileService,
              private router:Router,
            private lockusersService: LockuserserviceService

  ){

  }
  message:any='';
  error:string='';
  public users:any = [];
  getUsers(){
    this.lockusersService.getusers().subscribe(
      {
        next:(response)=>{

          this.users = response;


        }
      }
    )
  };

  lockUser(email: string) {
    this.lockusersService.lockUser(email).subscribe({
      next: (response) => {
        this.message = "user locked";
        // Find the user object in the users array by email
        const userIndex = this.users.findIndex((r: any) => r.email === email);

        if (userIndex !== -1) {
          // Update the notLocker property of the user object
          this.users[userIndex].notLocker = ! this.users[userIndex].notLocker ;
        }
      },
      error: (error) => {
        console.error('Error:', error);
        this.message = 'Failed to lock user. User may already be locked or not found.';
      }
    });
  }
  unlockUser(email:string)
  {
    this.lockusersService.unlockUser(email).subscribe(
      {
        next:(response)=>{
          this.message="user unlocked successfully"
        }
      }

    )
  }

}
