import { Injectable } from '@angular/core';
import { ApiConstants } from '../apiConstants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserprofileService} from "../../../FrontOffice/services/userprofile/userprofile.service";

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor(private http: HttpClient,private up:UserprofileService) { }

  deleteSummaryFromChapter(summaryId:number,chapterId:number):Observable<any>{
    const headers = this.up.createAuthorization();

    let chapterSummaryUrl:string = `${ApiConstants.BASE_URL}/chapters/${chapterId}/summaries/${summaryId}`;
    return this.http.delete(chapterSummaryUrl,{headers});
  }


  getSummary(summaryId:number):Observable<any>{
    const headers = this.up.createAuthorization();

    let summaryUrl:string = `${ApiConstants.BASE_URL}/summaries/${summaryId}`;
    console.log(summaryUrl);
    return this.http.get(summaryUrl,{headers});
  }


  deleteSummaryFromCourse(courseId:number,summaryId:number):Observable<any>{
    const headers = this.up.createAuthorization();
    let deleteSummaryUrl:string=`${ApiConstants.BASE_URL}/courses/${courseId}/summaries/${summaryId}`
    console.log(deleteSummaryUrl)
    return this.http.delete<any>(deleteSummaryUrl,{headers});
  }

  updateSummary(summaryId:number,summaryData:any):Observable<any>{
    const headers = this.up.createAuthorization();
    let updateSummaryUrl:string=`${ApiConstants.BASE_URL}/summaries/${summaryId}`
    console.log(summaryData)
    return this.http.put<any>(updateSummaryUrl,summaryData,{headers});
  }
}
