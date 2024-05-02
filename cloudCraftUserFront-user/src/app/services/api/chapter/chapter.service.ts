import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChapterRepresentation } from '../models/chapter-representation';
import { ApiConstants } from '../apiConstants';
import {UserprofileService} from "../../../FrontOffice/services/userprofile/userprofile.service";

@Injectable({
  providedIn: 'root'
})
export class ChapterService {


  constructor(
    private http: HttpClient,
  private up:UserprofileService

) { }



  getChapter(chapterId:number):Observable<any>
{
  const headers = this.up.createAuthorization();

  let chapterDetailsUrl:string = `${ApiConstants.BASE_URL}/chapters/${chapterId}`;
  return this.http.get<any>(chapterDetailsUrl,{headers});

}
addContentToChapter(chapterId:number,contentData:FormData):Observable<any>{
  const headers = this.up.createAuthorization();

  let chapterContentUrl:string=`${ApiConstants.BASE_URL}/chapters/${chapterId}/contents`
  return this.http.post<any>(chapterContentUrl,contentData,{headers});
}
addSummaryToChapter(chapterId:number,summaryData:FormData):Observable<any>{
  const headers = this.up.createAuthorization();
  let chapterContentUrl:string=`${ApiConstants.BASE_URL}/chapters/${chapterId}/summaries`
  return this.http.post<any>(chapterContentUrl,summaryData,{headers});
}
updateChapter(chapterId:number,chapterData:any):Observable<any>{
  const headers = this.up.createAuthorization();
  let updateChapterUrl:string=`${ApiConstants.BASE_URL}/chapters/${chapterId}`
  return this.http.put<any>(updateChapterUrl,chapterData,{headers});
}

deleteChapterFromCourse(courseId:number,chapterId:number):Observable<any>{
  const headers = this.up.createAuthorization();
  let deleteChapterUrl:string=`${ApiConstants.BASE_URL}/courses/${courseId}/chapters/${chapterId}`;
  return this.http.delete<any>(deleteChapterUrl,{headers});
}




}
