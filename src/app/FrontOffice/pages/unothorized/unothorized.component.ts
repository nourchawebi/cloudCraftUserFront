import { Component } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-unothorized',
  templateUrl: './unothorized.component.html',
  styleUrls: ['./unothorized.component.css']
})
export class UnothorizedComponent {
   token:any = localStorage.getItem('token');
  jwtHelper = new JwtHelperService();
   userAll:any =  this.jwtHelper.decodeToken(this.token);
  userRole:any= this.userAll.role;
  // Check if the user role is "USER"


}
