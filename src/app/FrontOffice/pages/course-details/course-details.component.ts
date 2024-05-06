import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { RatingRepresentation } from '../../../services/api/models/rating-representation';
import { CourseDetails } from '../../../services/api/models/course-details-representation';
import { CourseService } from '../../../services/api/courses/course.service';
import { ChapterService } from '../../../services/api/chapter/chapter.service';
import { SummaryService } from '../../../services/api/summary/summary.service';
import { NavigationService } from '../../../services/navigation/navigation.service';
import { PayloadSerialization } from '../../../services/api/models/payload-serialization';
import { RatingUtilFunction } from 'src/app/UtilComponents/ratings/rating-util-functions';
import { UserprofileService } from '../../services/userprofile/userprofile.service';
import { UserRepresentation } from 'src/app/services/api/models/user-representation';

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
  ratingUrl=`/home/courses/${this.courseId}/ratings/add`;


  connectedUser:UserRepresentation|null=null;
  constructor(
    private route: ActivatedRoute,
     private courseService:CourseService,
     private chapterService:ChapterService,
     private summaryService:SummaryService,
     private navigationService:NavigationService,
     private cdr: ChangeDetectorRef,
     private up:UserprofileService
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

  receiveId($event:number){

    this.ratingsRep=this.ratingsRep.filter(rating=>rating.id!==$event)
    this.course.ratings=this.course.ratings.filter(rating=>rating.id!==$event)
    console.log(this.ratingsRep)
    this.cdr.detectChanges();
  }
  isActionAllowd(object:any):boolean{
    if(this?.connectedUser?.email==object.owner.email)return true;
    return false;
    
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

  calcRating(ratings:Array<RatingRepresentation>){
    return RatingUtilFunction.calcRating(ratings);
  }



}
