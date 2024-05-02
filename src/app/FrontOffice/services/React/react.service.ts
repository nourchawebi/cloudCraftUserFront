import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReactService {
  constructor(private http:HttpClient) { }
  private baseurl :string='http://localhost:8081/api/reacts';

  likePost(annonceId: number, userId: number): Observable<any> {
    
    const params = new HttpParams()
    .set('annonce_id', annonceId.toString())
    .set('user_id', userId.toString());

    return this.http.post<any>(`${this.baseurl}/like`,params);
  }


  dislikePost(annonceId: number, userId: number): Observable<any> {
    const params = new HttpParams()
      .set('annonce_id', annonceId.toString())
      .set('user_id', userId.toString());

    return this.http.post<any>(`${this.baseurl}/dislike`, params);
  }
  getNumberOfDislikesForPost(annonceId: number): Observable<number> {
    return this.http.get<number>(`${this.baseurl}/nbrDislikesParAnnonce/${annonceId}`);
  }
  getNumberOfLikesForPost(annonceId: number): Observable<number> {
    return this.http.get<number>(`${this.baseurl}/nbrLikesParAnnonce/${annonceId}`);
  }
  verifyUserReaction(userId: number, annonceId: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseurl}/verifyUserReaction?userId=${userId}&annonceId=${annonceId}`);
  }

  
}
