import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import {AuthenticationService} from "../../FrontOffice/services/auth/authentication.service";

@Component({
  selector: 'app-sidebar-back',
  templateUrl: './sidebar-back.component.html',
  styleUrls: ['./sidebar-back.component.css']
})
export class SidebarBackComponent {
  constructor(private router: Router,
              private  authService:AuthenticationService
  ) {

  }
  activeTab : string ='userDashboard'; // Track the active item
  setActiveItem(tab: string)
  {

    this.activeTab = tab;

  }
  logout() {
    this.authService.signOut().subscribe(
      {
        next:()=>{
          localStorage.removeItem('token');
          this.router.navigate(['login'])
        }}

    );
  }

}
