import { Component, OnInit } from '@angular/core';
import { ChapterRepresentation } from '../services/api/models/chapter-representation';
import { ActivatedRoute, Router } from '@angular/router';
import { ChapterService } from '../services/api/chapter/chapter.service';
import { PayloadSerialization } from '../services/api/models/payload-serialization';
import { ContentService } from '../services/api/content/content.service';
import { SummaryService } from '../services/api/summary/summary.service';
import { NavigationService } from '../services/navigation/navigation.service';

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

deleteSummary(summaryId: number) {
  const result = window.confirm('Are you sure you want to delete this entity?');
  if (!result) return;
  
  this.summaryService.deleteSummaryFromChapter(summaryId, this.chapterId).subscribe(
    (response) => {
      if (response) {
        this.chapter.summaries = this.chapter.summaries.filter(summary => summary.id !== summaryId);
      }
    },
    (error) => {
      this.error = error?.error?.message || "Something went wrong :(";
    }
  );
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





}
