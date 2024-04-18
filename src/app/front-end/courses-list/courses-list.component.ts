import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/api/courses/course.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CourseRepresentation } from '../../services/api/models/course-representation';
import { Router } from '@angular/router';
import { PayloadSerialization } from '../../services/api/models/payload-serialization';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

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
      
      courses.forEach(course=>{
        this.courses.push(PayloadSerialization.createCourseRepresentation(course));
      })
      console.log(this.courses);
    },
    error:(error:HttpErrorResponse)=>{
      this.error=error?.error?.message||"Something went Wrong :(";
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
