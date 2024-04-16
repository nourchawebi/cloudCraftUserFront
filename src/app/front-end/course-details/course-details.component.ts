import { Component, OnInit } from '@angular/core';
import { CourseDetails } from '../../services/api/models/course-details-representation';
import { CourseService } from '../../services/api/courses/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChapterRepresentation } from '../../services/api/models/chapter-representation';
import { PayloadSerialization } from '../../services/api/models/payload-serialization';
import { NavigationService } from '../../services/navigation/navigation.service';
import { ContentService } from '../../services/api/content/content.service';
import { SummaryService } from '../../services/api/summary/summary.service';
import { ChapterService } from '../../services/api/chapter/chapter.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit{
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
  navigateToCoursesList(){
    this.navigationService.navigateToCoursesList();
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

  deleteChapterFromCourse(chapterId:number){
    const result = window.confirm('Are you sure you want to delete this entity?');
    if(!result) return;
    this.chapterService.deleteChapterFromCourse(this.courseId,chapterId).subscribe({next:result=>{
      if(result) 
      this.course.chapters = this.course.chapters.filter(chapter => chapter.id !== chapterId);
    console.log(result)
    },
    error:err=>{
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
