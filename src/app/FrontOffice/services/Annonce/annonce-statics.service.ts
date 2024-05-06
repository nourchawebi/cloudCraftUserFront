import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {UserprofileService} from "../userprofile/userprofile.service";

@Injectable({
  providedIn: 'root'
})
export class AnnonceStaticsService {

  constructor(private http: HttpClient,    private up:UserprofileService) { }
  private baseUrl :string='http://localhost:8081';

  getAnnoncesByCategory(): Observable<{ [key: string]: number }> {
    const headers = this.up.createAuthorization();
    return this.http.get<{ [key: string]: number }>(`${this.baseUrl}/categoryCounts`,{headers} );
  }







}
