import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { RatingRepresentation } from 'src/app/services/api/models/rating-representation';
import { RatingUtilFunction } from 'src/app/UtilComponents/ratings/rating-util-functions';
import { UserService } from 'src/app/services/api/user/user.service';
import { SecurityActions } from 'src/app/services/api/security-functions';
import { CourseDetails } from 'src/app/services/api/models/course-details-representation';
import { CourseService } from 'src/app/services/api/courses/course.service';
import { ChapterService } from 'src/app/services/api/chapter/chapter.service';
import { SummaryService } from 'src/app/services/api/summary/summary.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { PayloadSerialization } from 'src/app/services/api/models/payload-serialization';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit{
  course!:CourseDetails;
  courseId:number=this.route.snapshot.params["courseId"];
  error:string|null=null;
  
  courseRating=0;
  readOnly=true;

  isRatingsDisplayed=false;
  ratingsRep:Array<RatingRepresentation>=[];
  ratingUrl=`/user/courses/${this.courseId}/ratings/add`;

  constructor(
    private route: ActivatedRoute,
     private courseService:CourseService,
     private chapterService:ChapterService,
     private summaryService:SummaryService,
     private navigationService:NavigationService,
     private cdr: ChangeDetectorRef
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
         this.courseRating= RatingUtilFunction.calcRating(course.ratings);
         console.log(this.course);
      },
      error:err=>{
        console.log(err);
        console.log(this.course)
        console.log(err.error.message)
        
        this.error=err?.error?.message||"Something went Wrong :(";
        console.log(this.error);
        this.cdr.detectChanges();
      }
    });;
  }
  navigateToAddChapter(courseId:number|undefined){
    if(courseId==undefined) return;
    this.navigationService.navigateToAddChapter(courseId);
  }
  navigateToCoursesList(){
    this.navigationService.navigateToCoursesList();
  }
  navigateToChapterDetail(chapterId:number|undefined){
    if(chapterId==undefined) return;
    this.navigationService.navigateToChapterDetail(this.courseId,chapterId);
  }
  navigateToAddSummary(courseId:number|undefined){
    if(courseId==undefined) return;
    this.navigationService.navigateToAddSummaryToCourse(courseId);

  }
  navigateToSummaryDetail(summaryId:number|undefined){
    if(summaryId==undefined) return;
    this.navigationService.navigateToSummaryOfCourseDetail(this.courseId,summaryId);
  }

  deleteChapterFromCourse(chapterId:number|undefined){
    if(chapterId==undefined) return;
    const result = window.confirm('Are you sure you want to delete this entity?');
    if(!result) return;
    this.chapterService.deleteChapterFromCourse(this.courseId,chapterId).subscribe({next:result=>{
      if(result) 
      this.course.chapters = this.course.chapters.filter(chapter => chapter.id !== chapterId);
    console.log(result)
    },
    error:err=>{
      if(err.status==403) this.error="you can not delete this chapter (Unauthorized action)"
      else
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
      console.log(this.error);
    }
  });
  }


  isActionAllowd(object:any):boolean{
    console.log(SecurityActions.isActionsAllowed(object,2))
    return SecurityActions.isActionsAllowed(object,2);
  }
  showRatings(ratings:any){
    this.isRatingsDisplayed=true;
    let ratingsRep=PayloadSerialization.getRatingsRepresentation(ratings)
    this.ratingsRep=ratingsRep;
  }
  navigateToAddRatingToCourse(courseId:number){
    console.log(courseId);
    this.navigationService.navigateToAddRatingToCourse(courseId);
  }
  hideDisplayRatings(){
    console.log("hello");
    this.isRatingsDisplayed=false;
  }




}
