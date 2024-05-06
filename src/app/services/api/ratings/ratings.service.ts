import { Injectable } from '@angular/core';
import { ApiConstants } from '../apiConstants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {UserprofileService} from "../../../FrontOffice/services/userprofile/userprofile.service";

@Injectable({
  providedIn: 'root'
})
export class RatingsService {

  constructor(private http:HttpClient,private up:UserprofileService) { }

  addRatingToCourse(courseId:number,ratingData:any):Observable<any>{
    const headers = this.up.createAuthorization();

    let addRatingUrl:string=`${ApiConstants.BASE_URL}/courses/${courseId}/ratings`
    return this.http.post<any>(addRatingUrl, ratingData,{headers});

  }
  addRatingToChapter(chapterId:number,ratingData:any):Observable<any>{
    const headers = this.up.createAuthorization();

    let addRatingUrl:string=`${ApiConstants.BASE_URL}/chapters/${chapterId}/ratings`
    return this.http.post<any>(addRatingUrl, ratingData,{headers});

  }
  addRatingToSummary(summaryId:number,ratingData:any):Observable<any>{
    const headers = this.up.createAuthorization();

    let addRatingUrl:string=`${ApiConstants.BASE_URL}/summaries/${summaryId}/ratings`
    return this.http.post<any>(addRatingUrl, ratingData,{headers});

  }

  deleteRatingFromCourse(courseId:number,ratingId:number):Observable<any>{
    const headers = this.up.createAuthorization();

    let deleteRatingUrl:string=`${ApiConstants.BASE_URL}/courses/${courseId}/ratings/${ratingId}`
    return this.http.delete<any>(deleteRatingUrl,{headers});

  }

  deleteRatingFromChapter(chapterId:number,ratingId:number):Observable<any>{
    console.log("SENDING REQUEST")
    const headers = this.up.createAuthorization();

    let deleteRatingUrl:string=`${ApiConstants.BASE_URL}/chapters/${chapterId}/ratings/${ratingId}`
    return this.http.delete<any>(deleteRatingUrl,{headers});

  }
  deleteRatingFromSummary(summaryId:number,ratingId:number):Observable<any>{
    const headers = this.up.createAuthorization();

    let deleteRatingUrl:string=`${ApiConstants.BASE_URL}/summaries/${summaryId}/ratings/${ratingId}`
    
    console.log(headers)
  
    return this.http.delete<any>(deleteRatingUrl,{headers});

  }

}
