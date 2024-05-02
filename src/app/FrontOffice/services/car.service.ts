import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validator, } from "@angular/forms";
import {UserprofileService} from "./userprofile/userprofile.service";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private baseUrl = "http://localhost:8081/car"
  choixmenu : string = 'A';
  public dataForm!: FormGroup ;
  constructor(private http: HttpClient, private up:UserprofileService) { }

  getData(id:number): Observable<Object> {
    const headers = this.up.createAuthorization();
    return this.http.get(`${this.baseUrl}/${id}`,{headers})
  }

  createData(info: Object): Observable<Object> {
    const headers = this.up.createAuthorization();
    return this.http.post(`${this.baseUrl}`,info,{headers});
  }

  updateData(id:number, value:any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`,value)
  }

  deleteData(id:Number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType: 'text'})
  }

  getAll(): Observable<any> {
    const headers = this.up.createAuthorization();

    return this.http.get(`${this.baseUrl}`,{headers})
  }

}
