import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {TokenInfos} from "../../models/token-infos";

@Injectable({
  providedIn: 'root'
})
export class UserstoreService {
  private fullName$ = new BehaviorSubject<string>("");
  private email$ = new BehaviorSubject<string>("");
  private role$ = new BehaviorSubject<string>("");

  private user$ = new BehaviorSubject<TokenInfos | null>(null);

  constructor() { }


public getUser()
{
  return this.user$.asObservable()}
  public setUser(user:TokenInfos){
    this.user$.next(user);
  }

  public getRoleFromStore(){
    return this.role$.asObservable();
  }

  public setRoleForStore(role:string){
    this.role$.next(role);
  }

  public getFirstNameFromStore(){
    return this.fullName$.asObservable();
  }


  public setFirstNameForStore(fullname:string){
    this.fullName$.next(fullname)
  }
  public setEmailForStore(email:string){
    this.fullName$.next(email)
  }
  public getEmailFromStore(){
    return this.email$.asObservable();
  }

}
