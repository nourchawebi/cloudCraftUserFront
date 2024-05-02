import { ApiConstants } from "./apiConstants";
import { UserRepresentation } from "./models/user-representation";
import { UserService } from "./user/user.service";



export class SecurityActions{
    static connectedUser:UserRepresentation|null=null;

    constructor(userService:UserService){

    }

    static getConnectedUser(user:number):UserRepresentation{
            return user==1?{
                id:2,
                email:"saif@gmail.com"
            }:{
                
                id:2,
                email:"ali@gmail.com"
            }
        }


        
    static isActionsAllowed(object:any,user:number):boolean{
        return object.owner.email===this.getConnectedUser(user).email;
    }

    }



    // static getConnectedUser(){
    //     if(this.connectedUser==null){

    //         this.userS
    //     }
    // }


    // static displayActions(object:any):boolean{
    //     return object.owner.email== 
    // }
