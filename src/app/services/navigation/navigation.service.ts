import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router:Router) { }


  navigateToAddChapter(courseId:number){
    this.router.navigate([`/courses/${courseId}/chapters/add`]);
  }
  navigateToCoursesList(){
    this.router.navigate([`/courses`]);  
  }
  navigateToChapterDetail(chapterI:number,courseId:number){
    this.router.navigate([`/courses/${courseId}/chapters/${chapterI}`])
  }
  navigateToAddSummaryToCourse(courseId:number){
    this.router.navigate([`/courses/${courseId}/summaries/add`])
  }
  navigateToSummaryOfCourseDetail(courseId:number,summaryId:number){
    this.router.navigate([`/courses/${courseId}/summaries/${summaryId}`])
  }

  navigateToAddContentToChapter(chapterId:number,courseId:number){
   
    this.router.navigate([`/courses/${courseId}/chapters/${chapterId}/contents/add`]);   
  }
  navigateToAddSummaryToChapter(chapterId:number,courseId:number){
    this.router.navigate([`/courses/${courseId}/chapters/${chapterId}/summaries/add`]);   
  }
  navigateToSummaryChapterDetails(courseId:number,chapterId:number,summaryId:number){
    this.router.navigate([`/courses/${courseId}/chapters/${chapterId}/summaries/${summaryId}`]);     
  }
  navigateToCourseDetails(courseId:number){
    this.router.navigate([`/courses/${courseId}`]);  
  }
}
