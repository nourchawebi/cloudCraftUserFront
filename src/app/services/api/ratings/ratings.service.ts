import { Injectable } from '@angular/core';
import { ApiConstants } from '../apiConstants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatingsService {

  constructor(private http:HttpClient) { }

  addRatingToCourse(courseId:number,ratingData:any):Observable<any>{
    let addRatingUrl:string=`${ApiConstants.BASE_URL}/courses/${courseId}/ratings`
    return this.http.post<any>(addRatingUrl, ratingData,{headers:ApiConstants.headers});
  
  }
  addRatingToChapter(chapterId:number,ratingData:any):Observable<any>{
    let addRatingUrl:string=`${ApiConstants.BASE_URL}/chapters/${chapterId}/ratings`
    return this.http.post<any>(addRatingUrl, ratingData,{headers:ApiConstants.headers});
  
  }
  addRatingToSummary(summaryId:number,ratingData:any):Observable<any>{
    let addRatingUrl:string=`${ApiConstants.BASE_URL}/summaries/${summaryId}/ratings`
    return this.http.post<any>(addRatingUrl, ratingData,{headers:ApiConstants.headers});
  
  }
}
