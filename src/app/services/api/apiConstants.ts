import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../FrontOffice/services/auth/authentication.service";
import {environment} from "../../../environments/environment";
export class ApiConstants
{
  static readonly baseUrl = environment.API_BASE_URL;

  static BASE_URL:string =ApiConstants.baseUrl;


  constructor(
  ) { }

}
