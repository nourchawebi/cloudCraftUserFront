import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/api/courses/course.service';
import { CourseRepresentation } from '../../../services/api/models/course-representation';
import { PayloadSerialization } from '../../../services/api/models/payload-serialization';
import { NavigationService } from '../../../services/navigation/navigation.service';


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit{

  courses:Array<CourseRepresentation>=[];
  error:string|null=null;
  constructor(private coursesService:CourseService,private navigationService:NavigationService ){

  }


  ngOnInit(): void {

    this.coursesService.getAllCourses()
  .subscribe(
    {
    next:(courses)=>{
      console.log(courses);
      courses.forEach(course=>{
        console.log(course)
        this.courses.push(PayloadSerialization.createCourseRepresentation(course));
      })
      console.log(this.courses);
    },
    error:(error:HttpErrorResponse)=>{
      console.log(error);
      let message="Something went Wrong :("
      if(error.status==403) message="Unothorized action (403 status)"
      this.error=error?.error?.message||message;
    }
  },
  )
  }
  navigateToCourseDetails(courseId:number|undefined){
    console.log(courseId);
      this.navigationService.navigateToCourseDetails(courseId);
  }
  navigateToAddCourse(){
    this.navigationService.navigateToCoursesList();
  }





}
