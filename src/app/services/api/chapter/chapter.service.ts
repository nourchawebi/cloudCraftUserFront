import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChapterRepresentation } from '../models/chapter-representation';
import { ApiConstants } from '../apiConstants';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  

  constructor(
    private http: HttpClient
  ) { }



  getChapter(chapterId:number):Observable<any>
{
  let chapterDetailsUrl:string = `${ApiConstants.BASE_URL}/chapters/${chapterId}`;
  return this.http.get<any>(chapterDetailsUrl,{headers:ApiConstants.headers}); 

}
addContentToChapter(chapterId:number,contentData:FormData):Observable<any>{
  let chapterContentUrl:string=`${ApiConstants.BASE_URL}/chapters/${chapterId}/contents`
  return this.http.post<any>(chapterContentUrl,contentData,{headers:ApiConstants.headers}); 
}
addSummaryToChapter(chapterId:number,summaryData:FormData):Observable<any>{
  let chapterContentUrl:string=`${ApiConstants.BASE_URL}/chapters/${chapterId}/summaries`
  return this.http.post<any>(chapterContentUrl,summaryData,{headers:ApiConstants.headers});
}
updateChapter(chapterId:number,chapterData:any):Observable<any>{
  let updateChapterUrl:string=`${ApiConstants.BASE_URL}/chapters/${chapterId}`
  return this.http.put<any>(updateChapterUrl,chapterData,{headers:ApiConstants.headers});
}

deleteChapterFromCourse(courseId:number,chapterId:number):Observable<any>{
  let deleteChapterUrl:string=`${ApiConstants.BASE_URL}/courses/${courseId}/chapters/${chapterId}`;
  return this.http.delete<any>(deleteChapterUrl,{headers:ApiConstants.headers});
}




}
