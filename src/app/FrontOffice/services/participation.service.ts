import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserprofileService} from "./userprofile/userprofile.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {
  private baseUrl = "http://localhost:8081/participation"

  constructor(private http: HttpClient, private up:UserprofileService) { }

  getData(id:number): Observable<any> {
    const headers = this.up.createAuthorization();
    return this.http.get(`${this.baseUrl}/carpooled/${id}`,{headers})
  }

  deleteData(id:Number|undefined): Observable<any> {
    const headers = this.up.createAuthorization();
    return this.http.delete(`${this.baseUrl}/${id}`,{headers,responseType: 'text'})
  }

}
