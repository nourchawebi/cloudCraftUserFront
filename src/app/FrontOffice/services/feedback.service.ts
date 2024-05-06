import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserprofileService} from "./userprofile/userprofile.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private baseUrl = "http://localhost:8081/feedback"

  constructor(private http: HttpClient , private up:UserprofileService) { }

  getData(id:number): Observable<any> {
    const headers = this.up.createAuthorization();
    return this.http.get(`${this.baseUrl}/${id}`,{headers})
  }

  getAvg(id: number | undefined): Observable<any> {
    const headers = this.up.createAuthorization();
    return this.http.get(`${this.baseUrl}/useravg/${id}`,{headers})
  }

  getOne(id:number): Observable<any> {
    const headers = this.up.createAuthorization();
    return this.http.get(`${this.baseUrl}/user/${id}`,{headers})
  }

  createData(info: Object, id: number | undefined): Observable<Object> {
    const headers = this.up.createAuthorization();
    return this.http.post(`${this.baseUrl}/${id}`,info,{headers});
  }

  updateData( info: Object, id: number | undefined): Observable<Object> {
    const headers = this.up.createAuthorization();
    return this.http.put(`${this.baseUrl}/${id}`,info,{headers})
  }
}
