import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstants } from '../apiConstants';
import {UserprofileService} from "../../../FrontOffice/services/userprofile/userprofile.service";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient,  private up:UserprofileService) { }


  deleteContent(contentID:number,chapterId:number):Observable<any>{
    const headers = this.up.createAuthorization();

    let contentUrl:string = `${ApiConstants.BASE_URL}/chapters/${chapterId}/contents/${contentID}`;
      return this.http.delete(contentUrl,{headers});
  }
}
