import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnonceStaticsService {

  constructor(private http: HttpClient) { }
  private baseUrl :string='http://localhost:8081';

  getAnnoncesByCategory(): Observable<{ [key: string]: number }> {
    return this.http.get<{ [key: string]: number }>(`${this.baseUrl}/categoryCounts`);
  }







}
