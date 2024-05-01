import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstants } from '../apiConstants';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }


  deleteContent(contentID:number,chapterId:number):Observable<any>{
    let contentUrl:string = `${ApiConstants.BASE_URL}/chapters/${chapterId}/contents/${contentID}`;
      return this.http.delete(contentUrl,{headers:ApiConstants.headers});
  }
}
