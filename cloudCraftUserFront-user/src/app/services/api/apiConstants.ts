import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../FrontOffice/services/auth/authentication.service";

export class ApiConstants
{
    static BASE_URL:string ="http://localhost:8081";
    static token1="eyJhbGciOiJIUzI1NiJ9.eyIgbWZhRW5hYmxlZCI6dHJ1ZSwiZmlyc3ROYW1lIjoic2FpZiIsImxhc3ROYW1lIjoiZGViYmljaGUiLCJyb2xlIjoiVVNFUiIsImlkIjoxLCJiaXJ0aERhdGUiOiIyMC8xMC8xOTk5IiwiZW1haWwiOiJzYWlmQGdtYWlsLmNvbSIsImNsYXNzZVR5cGUiOiJGSVJTVFlFQVIiLCJzdWIiOiJjb20uZXNwcml0LmNsb3VkY3JhZnQuZW50aXRpZXMudXNlckVudGl0aWVzLlVzZXJANDAwNzczN2EiLCJpYXQiOjE3MTQzMDk3ODksImV4cCI6MTcxNjEwOTc4OX0.Sx-VIB9_UafIUOdS0Kzg89dqVyDsiXdS6Grz2HSG1Gk"
    static token2="eyJhbGciOiJIUzI1NiJ9.eyIgbWZhRW5hYmxlZCI6dHJ1ZSwiZmlyc3ROYW1lIjoiYWxpIiwibGFzdE5hbWUiOiJkZWJiaWNoZSIsInJvbGUiOiJVU0VSIiwiaWQiOjIsImJpcnRoRGF0ZSI6IjIwLzEwLzE5OTkiLCJlbWFpbCI6ImFsaUBnbWFpbC5jb20iLCJjbGFzc2VUeXBlIjoiRklSU1RZRUFSIiwic3ViIjoiY29tLmVzcHJpdC5jbG91ZGNyYWZ0LmVudGl0aWVzLnVzZXJFbnRpdGllcy5Vc2VyQDc2ZTkxODQ2IiwiaWF0IjoxNzE0MzI5NzEyLCJleHAiOjE3MTYxMjk3MTJ9.sg4XYKAoEFMCpCnsRcyzWxfySo-2FuuQtTmP_Y5_e54"

     static token=this.token2;
     // Set the token in the request headers
     static headers = new HttpHeaders({
       'Authorization': 'Bearer ' + ApiConstants.token
     });

  constructor(private http: HttpClient, private router: Router,
              private authService: AuthenticationService,
  ) { }

}
