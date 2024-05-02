import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RatingUtilFunction } from '../../../../../../cloudCraftUserFront-courses-management-front/cloudCraftUserFront-courses-management-front/src/app/UtilComponents/ratings/rating-util-functions';
import { PayloadSerialization } from '../../../services/api/models/payload-serialization';
import { RatingRepresentation } from '../../../services/api/models/rating-representation';
import { SummaryRepresentation } from '../../../services/api/models/summary-representation';
import { SecurityActions } from '../../../services/api/security-functions';
import { SummaryService } from '../../../services/api/summary/summary.service';
import { NavigationService } from '../../../services/navigation/navigation.service';

@Component({
  selector: 'app-summary-details',
  templateUrl: './summary-details.component.html',
  styleUrls: ['./summary-details.component.css']
})
export class SummaryDetailsComponent implements OnInit {
  summary!:SummaryRepresentation;
  summaryId:number=this.route.snapshot.params["summaryId"]
  courseId:number=this.route.snapshot.params["courseId"]
  summaryrating=0;
  ratings!:Array<RatingRepresentation>;


  error:string|null=null;

  resourse=this.route.snapshot.params["chapterId"]?"Chapter":"Course";
  chapterId=this.route.snapshot.params["chapterId"];


  isRatingsDisplayed=false;
  ratingsRep:Array<RatingRepresentation>=[];
  ratingUrl=`user/courses/${this.courseId}/summaries/${this.summaryId}/ratings/add`



  constructor(private summaryService:SummaryService,private route:ActivatedRoute ,private navigationService:NavigationService){

  }
  ngOnInit(): void {
    this.summaryService.getSummary(this.summaryId)
    .subscribe({
      next:summary=>{
          this.summary=PayloadSerialization.getSummaryRepresentation(summary);
          this.ratings=PayloadSerialization.getRatingsRepresentation(summary.ratings)
          console.log(summary);
          console.log(this.summary);
          this.summaryrating= RatingUtilFunction.calcRating(this.summary.ratings);
          console.log(this.summaryrating);
      },
      error:err=>{
        console.log(err);
      }
    });
  }
  isActionAllowd(object:any):boolean{
    console.log(SecurityActions.isActionsAllowed(object,1))
    return SecurityActions.isActionsAllowed(object,2);
  }


  deleteSuummary(summaryId:number){
  const result = window.confirm('Are you sure you want to delete this entity?');
  if(!result) return;

  if(this.resourse=="Course"){
    this.deleteSummaryFromCourse(summaryId);
  }
  if(this.resourse=="Chapter"){
    this.deleteSummaryFromChapter(summaryId);
  }



  }

  deleteSummaryFromCourse(summaryId:number){
    this.summaryService.deleteSummaryFromCourse(this.courseId,summaryId).subscribe({next:result=>{
      this.navigateToResourse();
    },
    error:err=>{
      this.error=err?.error?.message||"Something went Wrong :(";
      console.log(this.error);
    }
  });
  }

  deleteSummaryFromChapter(summaryId:number)
{

  this.summaryService.deleteSummaryFromChapter(summaryId,this.chapterId).subscribe( {next:result=>{
    if(result) this.navigateToResourse();
  },
  error:err=>{
    this.error=err?.error?.message||"Something went Wrong :(";;
  }
})
}


  navigateToResourse(){
    if(this.resourse=="Course")this.navigationService.navigateToCourseDetails(this.courseId);
    if(this.resourse=="Chapter")this.navigationService.navigateToChapterDetail(this.courseId,this.chapterId);
  }
  showRatings(ratings:Array<any>){
    this.isRatingsDisplayed=true;
    let ratingsRep=PayloadSerialization.getRatingsRepresentation(ratings)
    this.ratingsRep=ratingsRep;
  }
  navigateToAddRatingToSummary(courseId:number,summaryId:number){
    this.navigationService.navigateToAddRatingToSummary(courseId,summaryId);
  }

  navigateToUpdateSummary(summaryId:number){
if(this.resourse=="Course"){
  this.navigationService.navigateToUpdateSummaryCourse(this.courseId,summaryId)
}
if(this.resourse=="Chapter"){
  this.navigationService.navigateToUpdateSummaryChapter(this.courseId,this.chapterId,summaryId)
}
}


  hideDisplayRatings(){
    console.log("hello");
    this.isRatingsDisplayed=false;
  }


}
