import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RatingRepresentation } from '../../../services/api/models/rating-representation';
import { RatingUtilFunction } from '../../../../../../cloudCraftUserFront-courses-management-front/cloudCraftUserFront-courses-management-front/src/app/UtilComponents/ratings/rating-util-functions';
import { SecurityActions } from '../../../services/api/security-functions';
import { ChapterRepresentation } from '../../../services/api/models/chapter-representation';
import { NavigationService } from '../../../services/navigation/navigation.service';
import { ChapterService } from '../../../services/api/chapter/chapter.service';
import { ContentService } from '../../../services/api/content/content.service';
import { SummaryService } from '../../../services/api/summary/summary.service';
import { PayloadSerialization } from '../../../services/api/models/payload-serialization';

@Component({
  selector: 'app-chapter-details',
  templateUrl: './chapter-details.component.html',
  styleUrls: ['./chapter-details.component.css']
})
export class ChapterDetailsComponent implements OnInit{
  chapter!:ChapterRepresentation;
  chapterId:number=this.route.snapshot.params["chapterId"];
  courseId:number=this.route.snapshot.params["courseId"];
  error:string|null=null;
  readonly=false;

  isRatingsDisplayed=false;
  ratingsRep:Array<RatingRepresentation>=[];
  ratingUrl=`/user/courses/${this.courseId}/chapters/${this.chapterId}/ratings/add`;
  chapterRating:number=0;

  constructor(
    private route:ActivatedRoute,
    private navigationService:NavigationService,
    private chapterService:ChapterService,
    private contentService:ContentService ,
    private summaryService:SummaryService
    ){

  }

  ngOnInit(): void {


    this.chapterService.getChapter(this.chapterId)
    .subscribe({
      next:chapter=>{
          this.chapter=PayloadSerialization.getChapterRepresentation(chapter);
          console.log(chapter);
          console.log(this.chapter);
          this.chapterRating=RatingUtilFunction.calcRating(this.chapter.ratings);
      },
      error:err=>{
        this.error=err?.error?.message||"Something went Wrong :(";
      }
    });
  }
  deleteContent(contentId:number){
    const result = window.confirm('Are you sure you want to delete this entity?');
    if(!result) return;
      this.contentService.deleteContent(contentId,this.chapterId).subscribe({
        next:result=>{
          if(result) this.chapter.chapterContent = this.chapter.chapterContent.filter(chapterContentItem => chapterContentItem.id !== contentId);
        },
        error:err=>{
          this.error=err?.error?.message||"Something went Wrong :(";;
        }
      });
}


deleteSummary(summaryId:number)
{

  console.log("IM HERE");
  const result = window.confirm('Are you sure you want to delete this entity?');
  if(!result) return;
  this.summaryService.deleteSummaryFromChapter(summaryId,this.chapterId).subscribe( {next:result=>{
    if(result) this.chapter.summaries = this.chapter.summaries.filter(summary => summary.id !== summaryId);
  },
  error:err=>{
    this.error=err?.error?.message||"Something went Wrong :(";;
  }
})
}
isActionAllowd(object:any):boolean{
  console.log(SecurityActions.isActionsAllowed(object,1))
  return SecurityActions.isActionsAllowed(object,2);
}


  navigateToAddContent(chapterId:number){

    this.navigationService.navigateToAddContentToChapter(chapterId,this.courseId);
  }
  navigateToAddSummaryToChapter(chapterId:number){
    this.navigationService.navigateToAddSummaryToChapter(chapterId,this.courseId);
  }
  navigateToSummaryChapterDetails(summaryId:number){
    console.log("what2");
    this.navigationService.navigateToSummaryChapterDetails(summaryId,this.chapterId,this.courseId);
  }
  navigateToCourse(){
    this.navigationService.navigateToCourseDetails(this.courseId);
  }
  navigateToSummaryDetails(summaryId:number){
    this.navigationService.navigateToSummaryChapterDetails(this.courseId,this.chapterId,summaryId);
  }
  showRatings(ratings:any){
    this.isRatingsDisplayed=true;
    let ratingsRep=PayloadSerialization.getRatingsRepresentation(ratings)
    this.ratingsRep=ratingsRep;
  }
  navigateToAddRatingToChapter(chapterId:number){
    this.navigationService.navigateToAddRatingToChapter(this.courseId,chapterId);
  }
  navigateToUpdateChapter(chapterId:number){
    this.navigationService.navigateToUpdateChapter(this.courseId,chapterId);
  }


  hideDisplayRatings(){
    console.log("hello");
    this.isRatingsDisplayed=false;
  }



}
