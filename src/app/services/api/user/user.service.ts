import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConstants } from '../apiConstants';
import { UserRepresentation } from '../models/user-representation';
import { PayloadSerialization } from '../models/payload-serialization';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static connectedUser:UserRepresentation|null=null;

  constructor(private http:HttpClient) {

   }


  //  async getConnectedClient(){
  //   if(UserService.connectedUser!==null) return UserService.connectedUser;
  //   const connectedUserUrl:string =`${ApiConstants.BASE_URL}/users/me`;
  //    const  {data} =await this.http.get(connectedUserUrl,{headers:ApiConstants.headers})
  //   if(data){

  //   }
  //   ;
  //  }


  //  isActionPermitted(object:any):boolean{
  //     return object.owner.email===this.getConnectedClient()
  //  }
   

  }
