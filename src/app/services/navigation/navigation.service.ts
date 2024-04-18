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
  navigateToChapterDetail(chapterI:number,courseId:number){
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
  navigate(url:any){
    console.log(url);
    this.router.navigate([url]);
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
