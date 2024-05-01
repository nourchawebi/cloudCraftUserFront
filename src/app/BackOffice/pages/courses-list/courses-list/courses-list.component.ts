import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/api/courses/course.service';
import { CourseRepresentation } from 'src/app/services/api/models/course-representation';
import { PayloadSerialization } from 'src/app/services/api/models/payload-serialization';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

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
