import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { AuthenticationService } from './authentication.service';
import {TokenInfos} from "../../models/token-infos"; // Import your AuthenticationService

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthenticationService);

  // Get the token from localStorage or wherever you store it
  const token = localStorage.getItem('token');

  if (!token) {
    router.navigate(['login']);
    return false;
  }

  const user = authService.getLogedUser()
  var loggedUser= user  as TokenInfos
  // Decode the token to get the user role

  const userRole =  loggedUser.role;
  // Check if the user role is "USER"
  if (userRole === 'USER') {
    return true;
  } else {
    // Redirect to unauthorized page or do something else
    router.navigate(['unauthorized']);
    return false;
  }
};
export const adminAuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthenticationService);

  // Get the token from localStorage or wherever you store it
  const token = localStorage.getItem('token');

  if (!token) {
    router.navigate(['login']);
    return false;
  }
  const user = authService.getLogedUser()
var loggedUser= user  as TokenInfos
  // Decode the token to get the user role

  const userRole =  loggedUser.role; // Assuming the role is stored in the token as "role"

  // Check if the user role is "Admin"
  if (userRole === 'ADMIN') {
    return true;
  } else {
    // Redirect to unauthorized page or do something else
    router.navigate(['unauthorized']);
    return false;
  }
};
