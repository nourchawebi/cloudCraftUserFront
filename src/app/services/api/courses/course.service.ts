import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseRepresentation } from '../models/course-representation';
import { CourseDetails } from '../models/course-details-representation';
import { ChapterRepresentation } from '../models/chapter-representation';
import { ChapterRequestRepresentation } from '../models/chapter-request-representation';
import { ApiConstants } from '../apiConstants';
import {UserprofileService} from "../../../FrontOffice/services/userprofile/userprofile.service";
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private coursesURL:string =`${ApiConstants.BASE_URL}/courses`;

  constructor(
    private http: HttpClient,
    private up:UserprofileService
  ) { }



  getAllCourses():Observable<Array<CourseRepresentation>>
{
  const headers = this.up.createAuthorization();
  return this.http.get<Array<CourseRepresentation>>(this.coursesURL,{ headers });

}
getAllCoursesDirectly():Observable<Array<CourseRepresentation>>
{
  const headers = this.up.createAuthorization();

  // Get the token from wherever you store it (e.g., localStorage)

  return this.http.get<Array<CourseRepresentation>>("http://localhost:8081/courses",{ headers });

}
getAllUsers():Observable<Array<CourseRepresentation>>
{
  const headers = this.up.createAuthorization();

  return this.http.get<Array<CourseRepresentation>>(`${ApiConstants.BASE_URL}/test/users`,{ headers });

}
createCourse(courseformData:FormData):Observable<CourseRepresentation>
{
  const headers = this.up.createAuthorization();


  return this.http.post<CourseRepresentation>(this.coursesURL,courseformData,{headers});
}
getCourseById(courseId:number):Observable<CourseDetails>{
  const headers = this.up.createAuthorization();


  const coursesUrl:string =`${this.coursesURL}/${courseId}`;
  return   this.http.get<CourseDetails>(coursesUrl,{headers});


}

affectChapter(courseId:number,chapterFormData:ChapterRequestRepresentation):Observable<ChapterRepresentation>{
  const headers = this.up.createAuthorization();

  const chaptersUrl:string =`${this.coursesURL}/${courseId}/chapters`;
  return  this.http.post<ChapterRepresentation>(chaptersUrl,chapterFormData,{headers});


}
addSummaryToCourse(courseId:number,summaryData:FormData):Observable<any>{
  const headers = this.up.createAuthorization();

  let addSummaryUrl:string=`${ApiConstants.BASE_URL}/courses/${courseId}/summaries`
  console.log(summaryData)
  return this.http.post<any>(addSummaryUrl,summaryData,{headers});
}

deleteCourse(courseId:number){
  const headers = this.up.createAuthorization();

  let deleteCourseUrl:string=`${ApiConstants.BASE_URL}/courses/${courseId}`
  return this.http.delete<any>( deleteCourseUrl,{headers});
}



}
