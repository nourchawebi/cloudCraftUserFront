import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {UserprofileService} from "../userprofile/userprofile.service";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient, private up:UserprofileService) { }
  private baseurl :string='http://localhost:8081/api/comments';

  addComment(comment:any):Observable<any>{

    const headers = this.up.createAuthorization();
    return this.http.post(`${this.baseurl}/addComment`,comment,{headers});
  }


  getAllComments(annonceId: number): Observable<Comment[]> {
    const headers = this.up.createAuthorization();
    return this.http.get<Comment[]>(`${this.baseurl}/getAllComments/${annonceId}`,{headers});
  }

  updateComment(comment:any,id_comment:number):Observable<any>{
    const headers = this.up.createAuthorization();
    return this.http.put(`${this.baseurl}/updateComment/${id_comment}`,comment,{headers});
  }
}
