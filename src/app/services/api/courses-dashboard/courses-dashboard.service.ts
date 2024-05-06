import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserprofileService } from 'src/app/FrontOffice/services/userprofile/userprofile.service';
import { ApiConstants } from '../apiConstants';
import { da } from 'date-fns/locale';

@Injectable({
  providedIn: 'root'
})
export class CoursesDashboardService {

  dashBoardBaseUrl= `${ApiConstants.BASE_URL}/course-dashboard`;

  constructor(
    private http: HttpClient,
  private up:UserprofileService

) { }



getCoursesByYear():Observable<any>
{
  console.log("REACHING HERE")
  const headers = this.up.createAuthorization();

  let resoursebyTypeUrl:string = `${this.dashBoardBaseUrl}/coursesByYear`;
  return this.http.get<any>(resoursebyTypeUrl,{headers});

}

getRatingsByValue():Observable<any>
{
  console.log("REACHING HERE")
  const headers = this.up.createAuthorization();

  let resoursebyTypeUrl:string = `${this.dashBoardBaseUrl}/ratingsByValue`;
  return this.http.get<any>(resoursebyTypeUrl,{headers});

}
getCoursesByRating():Observable<any>
{
  console.log("REACHING HERE")
  const headers = this.up.createAuthorization();

  let resoursebyTypeUrl:string = `${this.dashBoardBaseUrl}/coursesByRatings`;
  return this.http.get<any>(resoursebyTypeUrl,{headers});

}
countSummaries():Observable<any>
{
  console.log("REACHING HERE")
  const headers = this.up.createAuthorization();

  let summaryCountUrl:string = `${this.dashBoardBaseUrl}/summariesCount`;
  return this.http.get<any>(summaryCountUrl,{headers});

}
countChapters():Observable<any>
{
  console.log("REACHING HERE")
  const headers = this.up.createAuthorization();

  let chapterCountUrl:string = `${this.dashBoardBaseUrl}/chaptresCount`;
  return this.http.get<any>(chapterCountUrl,{headers});

}
countCourses():Observable<any>
{
  console.log("REACHING HERE")
  const headers = this.up.createAuthorization();

  let courseCountUrl:string = `${this.dashBoardBaseUrl}/coursesCount`;
  return this.http.get<any>(courseCountUrl,{headers});

}

}
