import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }
  private baseurl :string='http://localhost:8081/api/comments';

  addComment(comment:any):Observable<any>{
    return this.http.post(`${this.baseurl}/addComment`,comment);
  }

  getAllComments(annonceId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseurl}/getAllComments/${annonceId}`);
  }
  
  updateComment(comment:any,id_comment:number):Observable<any>{
    return this.http.put(`${this.baseurl}/updateComment/${id_comment}`,comment);
  }
}
