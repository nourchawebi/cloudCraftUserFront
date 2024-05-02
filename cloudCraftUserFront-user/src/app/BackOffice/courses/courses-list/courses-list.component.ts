import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import {CourseRepresentation} from "../../../services/api/models/course-representation";
import {CourseService} from "../../../services/api/courses/course.service";
import {NavigationService} from "../../../services/navigation/navigation.service";
import {PayloadSerialization} from "../../../services/api/models/payload-serialization";
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent {
  courses:Array<CourseRepresentation>=[];
  error:string|null=null;
  constructor(private coursesService:CourseService,private navigationService:NavigationService ){

  }


  ngOnInit(): void {

    this.coursesService.getAllCourses()
  .subscribe(
    {
    next:(courses)=>{

      courses.forEach(course=>{
        this.courses.push(PayloadSerialization.createCourseRepresentation(course));
      })
      console.log(this.courses);
    },
    error:(error:HttpErrorResponse)=>{
      console.log(error)
      this.error=error?.error?.message||"Something went Wrong :(";
    }
  },
  )
  }
  navigateToCourseDetailsBackOffice(courseId:number|undefined){
    console.log(courseId);
      this.navigationService.navigateToCourseDetailsBackOffice(courseId);
  }
  navigateToAddCourseBackOffice(){
    this.navigationService.navigateToAddCourseBackOffice();
  }
}
