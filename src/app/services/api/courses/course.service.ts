import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseRepresentation } from '../models/course-representation';
import { CourseDetails } from '../models/course-details-representation';
import { ChapterRepresentation } from '../models/chapter-representation';
import { ChapterRequestRepresentation } from '../models/chapter-request-representation';
import { ApiConstants } from '../apiConstants';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private coursesURL:string =`${ApiConstants.BASE_URL}/courses`;

  constructor(
    private http: HttpClient
  ) { }

  getAllCourses():Observable<Array<CourseRepresentation>>
{
  return this.http.get<Array<CourseRepresentation>>(this.coursesURL); 

}
createCourse(courseformData:FormData):Observable<CourseRepresentation>
{
  return this.http.post<CourseRepresentation>(this.coursesURL,courseformData);
}
getCourseById(courseId:number):Observable<CourseDetails>{
  const coursesUrl:string =`${this.coursesURL}/${courseId}`;
  return   this.http.get<CourseDetails>(coursesUrl);


}

affectChapter(courseId:number,chapterFormData:ChapterRequestRepresentation):Observable<ChapterRepresentation>{
  const chaptersUrl:string =`${this.coursesURL}/${courseId}/chapters`;
  return  this.http.post<ChapterRepresentation>(chaptersUrl,chapterFormData);


}
addSummaryToCourse(courseId:number,summaryData:FormData):Observable<any>{
  let addSummaryUrl:string=`${ApiConstants.BASE_URL}/courses/${courseId}/summaries`
  return this.http.post<any>(addSummaryUrl,summaryData);
}

deleteCourse(courseId:number){
  let deleteCourseUrl:string=`${ApiConstants.BASE_URL}/courses/${courseId}`
  return this.http.delete<any>( deleteCourseUrl);
}

}
