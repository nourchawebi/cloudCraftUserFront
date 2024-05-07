import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/api/courses/course.service';
import { CourseRepresentation } from '../../../services/api/models/course-representation';
import { PayloadSerialization } from '../../../services/api/models/payload-serialization';
import { NavigationService } from '../../../services/navigation/navigation.service';
import { CourseDetails } from 'src/app/services/api/models/course-details-representation';
import { RatingRepresentation } from 'src/app/services/api/models/rating-representation';
import { ca } from 'date-fns/locale';


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit{
  courseCategory=["PROGRAMMING","WEB","MATH"]


  courses:Array<CourseDetails>=[];
  filtredCourses:Array<CourseDetails>=[];
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
        this.courses.push(PayloadSerialization.getDetailedCourse(course));
        this.filtredCourses=this.courses;
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


  countRating(ratings:Array<RatingRepresentation>){
    let sum=0;
    ratings.forEach(rating=>sum=+rating.value);
    console.log(sum/(ratings.length))
    return (sum/(ratings.length));
  }
  filterCoursessByCategory(category:string){
    if (this?.courses?.length!==0) {
      if (category === 'All') {
        this.filtredCourses = this.courses;
      } else {
        this.filtredCourses = this.courses.filter(course => course.courseCategory === category);
      }
    } else {
      this.filtredCourses = [];
    }
  }



}
