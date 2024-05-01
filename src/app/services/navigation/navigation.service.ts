import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  userUrl="/user";
  adminUrl="/admin"

  constructor(private router:Router) { }


  navigateToAddChapter(courseId:number){
    this.router.navigate([`${this.userUrl}/courses/${courseId}/chapters/add`]);
  }
  navigateToCoursesList(){
    this.router.navigate([`${this.userUrl}/courses`]);  
  }
  navigateToChapterDetail(courseId:number,chapterI:number){
    this.router.navigate([`${this.userUrl}/courses/${courseId}/chapters/${chapterI}`])
  }
  navigateToAddSummaryToCourse(courseId:number){
    this.router.navigate([`${this.userUrl}/courses/${courseId}/summaries/add`])
  }
  navigateToSummaryOfCourseDetail(courseId:number,summaryId:number){
    this.router.navigate([`${this.userUrl}/courses/${courseId}/summaries/${summaryId}`])
  }

  navigateToAddContentToChapter(chapterId:number,courseId:number){
   
    this.router.navigate([`${this.userUrl}/courses/${courseId}/chapters/${chapterId}/contents/add`]);   
  }
  navigateToAddSummaryToChapter(chapterId:number,courseId:number){
    this.router.navigate([`${this.userUrl}/courses/${courseId}/chapters/${chapterId}/summaries/add`]);   
  }
  navigateToSummaryChapterDetails(courseId:number,chapterId:number,summaryId:number){
    this.router.navigate([`${this.userUrl}/courses/${courseId}/chapters/${chapterId}/summaries/${summaryId}`]);     
  }
  navigateToCourseDetails(courseId:number|undefined){
    if(!courseId) return;
    this.router.navigate([`${this.userUrl}/courses/${courseId}`]);  
  }
  navigateToAddRatingToCourse(courseId:number){
    if(!courseId) return;
    this.router.navigate([`${this.userUrl}/courses/${courseId}/ratings/add`]);  
  
  }
  navigateToAddRatingToSummary(courseId:number,summaryId:number){
    if(!summaryId) return;
    this.router.navigate([`${this.userUrl}/courses/${courseId}/summaries/${summaryId}/ratings/add`]);  
  }
  navigateToAddRatingToChapter(courseId:number,chapterId:number){
    if(!chapterId) return;
    this.router.navigate([`${this.userUrl}/courses/${courseId}/chapters/${chapterId}/ratings/add`]);  
  }
  navigateToUpdateChapter(courseId:number,chapterId:number){
    if(!chapterId) return;
    this.router.navigate([`${this.userUrl}/courses/${courseId}/chapters/${chapterId}/update`]);  
  }
  navigate(url:any){
    console.log(url);
    this.router.navigate([url]);
  }

  navigateToUpdateSummaryCourse(courseId:number,summaryId:number) {
    this.router.navigate([`${this.userUrl}/courses/${courseId}/summaries/${summaryId}/update`]);  
  }

  navigateToUpdateSummaryChapter(courseId:number,chapterId:number,summaryId:number) {
    this.router.navigate([`${this.userUrl}/courses/${courseId}/chapters/${chapterId}/summaries/${summaryId}/update`]);  
  }

  navigateToCoursesListBack(){
    this.router.navigate([`${this.adminUrl}/courses`]); 
  }
  navigateToCourseDetailsBackOffice(courseId:number|undefined){
    if(!courseId) return;
    this.router.navigate([`${this.adminUrl}/courses/${courseId}`]);  
  }
  navigateToAddCourseBackOffice(){
    this.router.navigate([`${this.adminUrl}/courses/add`]);    
  }


 

}
