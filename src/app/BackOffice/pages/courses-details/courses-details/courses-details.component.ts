import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from 'src/app/services/api/chapter/chapter.service';
import { CourseService } from 'src/app/services/api/courses/course.service';
import { CourseDetails } from 'src/app/services/api/models/course-details-representation';
import { PayloadSerialization } from 'src/app/services/api/models/payload-serialization';
import { SummaryService } from 'src/app/services/api/summary/summary.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.css']
})
export class CoursesDetailsComponent implements OnInit{
  course!:CourseDetails;
  courseId!:number;
  error:string|null=null;
  constructor(
    private route: ActivatedRoute,
     private courseService:CourseService,
     private chapterService:ChapterService,
     private summaryService:SummaryService,
     private navigationService:NavigationService,
     ){

  }
  ngOnInit(): void {
    this.courseId = this
    .route
    .snapshot
    .params["courseId"];
    this.courseService
    .getCourseById(this.courseId)
    .subscribe({
      next:course=>{
        console.log(course);
         this.course=PayloadSerialization.getDetailedCourse(course);
         console.log(this.course);
      },
      error:err=>{
        this.error=err?.error?.message||"Something went Wrong :(";
      }
    });;
  }
  navigateToAddChapter(courseId:number){
    this.navigationService.navigateToAddChapter(courseId);
  }
  navigateToCoursesListBack(){
    this.navigationService.navigateToCoursesListBack();
  }
  navigateToChapterDetail(chapterId:number){
    this.navigationService.navigateToChapterDetail(chapterId,this.courseId);
  }
  navigateToAddSummary(courseId:number){
    this.navigationService.navigateToAddSummaryToCourse(courseId);

  }
  navigateToSummaryDetail(summaryId:number){
    this.navigationService.navigateToSummaryOfCourseDetail(this.courseId,summaryId);
  }

  deleteCourse(courseId:number){
    const result = window.confirm('Are you sure you want to delete this Course?');
    if(!result) return;
    this.courseService.deleteCourse(this.courseId).subscribe({next:result=>{
      if(result) 
      this.navigateToCoursesListBack();
    console.log(result)
    },
    error:err=>{
      console.log(err)
      this.error=err?.error?.message||"Something went Wrong :(";
    }
  });
  }
  deleteSummaryFromCourse(summaryId:number){
    const result = window.confirm('Are you sure you want to delete this entity?');
    if(!result) return;
    this.summaryService.deleteSummaryFromCourse(this.courseId,summaryId).subscribe({next:result=>{
      if(result) 
      this.course.summaries = this.course.summaries.filter(summary => summary.id !== summaryId);
    },
    error:err=>{
      this.error=err?.error?.message||"Something went Wrong :(";
    }
  });
}
}
