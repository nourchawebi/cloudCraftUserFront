import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {UserprofileService} from "../userprofile/userprofile.service";

@Injectable({
  providedIn: 'root'
})
export class ReactService {
  constructor(private http:HttpClient,private up:UserprofileService) { }
  private baseurl :string='http://localhost:8081/api/reacts';

  likePost(annonceId: number, userId: number): Observable<any> {
    const headers = this.up.createAuthorization();

    const params = new HttpParams()
    .set('annonce_id', annonceId.toString())
    .set('user_id', userId.toString());

    return this.http.post<any>(`${this.baseurl}/like`,params,{headers});
  }


  dislikePost(annonceId: number, userId: number): Observable<any> {
    const headers = this.up.createAuthorization();
    const params = new HttpParams()
      .set('annonce_id', annonceId.toString())
      .set('user_id', userId.toString());

    return this.http.post<any>(`${this.baseurl}/dislike`, params,{headers});
  }
  getNumberOfDislikesForPost(annonceId: number): Observable<number> {
    const headers = this.up.createAuthorization();
    return this.http.get<number>(`${this.baseurl}/nbrDislikesParAnnonce/${annonceId}`,{headers});
  }
  getNumberOfLikesForPost(annonceId: number): Observable<number> {
    const headers = this.up.createAuthorization();
    return this.http.get<number>(`${this.baseurl}/nbrLikesParAnnonce/${annonceId}`,{headers});
  }
  verifyUserReaction(userId: number, annonceId: number): Observable<boolean> {
    const headers = this.up.createAuthorization();
    return this.http.get<boolean>(`${this.baseurl}/verifyUserReaction?userId=${userId}&annonceId=${annonceId}`,{headers});
  }


}
