import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validator, } from "@angular/forms";
import {UserprofileService} from "./userprofile/userprofile.service";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private baseUrl = "http://localhost:8081/location"
  choixmenu : string = 'A';
  public dataForm!: FormGroup ;
  constructor(private http: HttpClient, private up:UserprofileService) { }

  getData(id:number): Observable<Object> {
    const headers = this.up.createAuthorization();
    return this.http.get(`${this.baseUrl}/${id}`,{headers})
  }

  getLocationNames(): Observable<any> {
    const headers = this.up.createAuthorization();
    return this.http.get(`${this.baseUrl}/names`,{headers})
  }

  createData(info: Object): Observable<Object> {
    const headers = this.up.createAuthorization();
    return this.http.post(`${this.baseUrl}/1`,info,{headers});
  }

  updateData(id:number, value:any): Observable<Object> {
    const headers = this.up.createAuthorization();
    return this.http.put(`${this.baseUrl}/${id}`,value,{headers})
  }

  deleteData(id:Number): Observable<any> {
    const headers = this.up.createAuthorization();
    return this.http.delete(`${this.baseUrl}/${id}`,{headers,responseType: 'text'})
  }

  getAll(): Observable<any> {
    const headers = this.up.createAuthorization();
    return this.http.get(`${this.baseUrl}`,{headers})
  }

}
