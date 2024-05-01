import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  return this.http.get<Array<CourseRepresentation>>(this.coursesURL,{ headers: ApiConstants.headers }); 

}
getAllCoursesDirectly():Observable<Array<CourseRepresentation>>
{
  // Get the token from wherever you store it (e.g., localStorage)

  return this.http.get<Array<CourseRepresentation>>("http://localhost:8081/courses",{ headers: ApiConstants.headers }); 

}
getAllUsers():Observable<Array<CourseRepresentation>>
{

  return this.http.get<Array<CourseRepresentation>>(`${ApiConstants.BASE_URL}/test/users`,{ headers: ApiConstants.headers }); 

}
createCourse(courseformData:FormData):Observable<CourseRepresentation>
{

  return this.http.post<CourseRepresentation>(this.coursesURL,courseformData,{headers:ApiConstants.headers});
}
getCourseById(courseId:number):Observable<CourseDetails>{

  const coursesUrl:string =`${this.coursesURL}/${courseId}`;
  return   this.http.get<CourseDetails>(coursesUrl,{headers:ApiConstants.headers});


}

affectChapter(courseId:number,chapterFormData:ChapterRequestRepresentation):Observable<ChapterRepresentation>{
  
  const chaptersUrl:string =`${this.coursesURL}/${courseId}/chapters`;
  return  this.http.post<ChapterRepresentation>(chaptersUrl,chapterFormData,{headers:ApiConstants.headers});


}
addSummaryToCourse(courseId:number,summaryData:FormData):Observable<any>{
  
  let addSummaryUrl:string=`${ApiConstants.BASE_URL}/courses/${courseId}/summaries`
  console.log(summaryData)
  return this.http.post<any>(addSummaryUrl,summaryData,{headers:ApiConstants.headers});
}

deleteCourse(courseId:number){
  let deleteCourseUrl:string=`${ApiConstants.BASE_URL}/courses/${courseId}`
  return this.http.delete<any>( deleteCourseUrl,{headers:ApiConstants.headers});
}



}
