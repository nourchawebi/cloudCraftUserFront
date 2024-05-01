import { Injectable } from '@angular/core';
import { ApiConstants } from '../apiConstants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor(private http: HttpClient) { }

  deleteSummaryFromChapter(summaryId:number,chapterId:number):Observable<any>{
    let chapterSummaryUrl:string = `${ApiConstants.BASE_URL}/chapters/${chapterId}/summaries/${summaryId}`;
    return this.http.delete(chapterSummaryUrl,{headers:ApiConstants.headers});
  }


  getSummary(summaryId:number):Observable<any>{
    let summaryUrl:string = `${ApiConstants.BASE_URL}/summaries/${summaryId}`;
    console.log(summaryUrl);
    return this.http.get(summaryUrl,{headers:ApiConstants.headers});
  }

  
  deleteSummaryFromCourse(courseId:number,summaryId:number):Observable<any>{
    let deleteSummaryUrl:string=`${ApiConstants.BASE_URL}/courses/${courseId}/summaries/${summaryId}`
    console.log(deleteSummaryUrl)
    return this.http.delete<any>(deleteSummaryUrl,{headers:ApiConstants.headers});
  }

  updateSummary(summaryId:number,summaryData:any):Observable<any>{
    let updateSummaryUrl:string=`${ApiConstants.BASE_URL}/summaries/${summaryId}`
    console.log(summaryData)
    return this.http.put<any>(updateSummaryUrl,summaryData,{headers:ApiConstants.headers});
  }
}
