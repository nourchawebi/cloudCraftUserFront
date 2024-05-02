import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../services/api/courses/course.service';
import { RatingsService } from '../../../services/api/ratings/ratings.service';
import { NavigationService } from '../../../services/navigation/navigation.service';

@Component({
  selector: 'app-add-rating',
  templateUrl: './add-rating.component.html',
  styleUrls: ['./add-rating.component.css']
})
export class AddRatingComponent {
  ratingForm: FormGroup=new FormGroup({
    content:new FormControl("",[Validators.required,Validators.minLength(3)]),
  });
  rating!:number;
  error:string|null=null;
  courseId=this.activatedRoute.snapshot.params["courseId"];
  chapterId:number|null=null;
  summaryId:number|null=null;
  resourse=this.getResourse();
  backResource:string=this.getBackResourse(this.resourse);

  constructor(
    private activatedRoute:ActivatedRoute ,
    private ratingService:RatingsService,
    private navigationService:NavigationService
  ){

  }


  getResourse():string{
    const chapterId=this.activatedRoute.snapshot.params["chapterId"];
    const summaryId=this.activatedRoute.snapshot.params["summaryId"];
    if(chapterId) this.chapterId=chapterId;
    if(summaryId) this.summaryId=summaryId;
    if(chapterId&&!summaryId) return "chapter";
    if(!chapterId&&summaryId) return "course-summary";
    if(!chapterId&&!summaryId) return "course";
    if(chapterId&&summaryId) return "chapter-summary";
    else return "";
  }
  getBackResourse(resourse:string ):string{
    if(this.resourse=="course-summary"||this.resourse=="chapter-summary"){
      return "Summary";
    }
    if(this.resourse=="course"){
      return "Course";
    }
    if(this.resourse=="chapter"){
      return "Chapter";
    }
    return "";
  }

  public navigateToResource(){
    if(this.resourse=="chapter")
    this.navigationService.navigateToChapterDetail(this.courseId,this.chapterId||0);
    if(this.resourse=="course-summary")
      this.navigationService.navigateToSummaryOfCourseDetail(this.courseId,this.summaryId||0);
    if(this.resourse=="course")
      this.navigationService.navigateToCourseDetails(this.courseId);
    if(this.resourse=="chapter-summary")
      this.navigationService.navigateToSummaryChapterDetails(this.courseId, this.chapterId||0,this.summaryId||0);
  }
  onSubmit() {

      // Form is valid, handle the submission

      // You can send the form data to an API, perform further actions, etc.
        if(this.ratingForm.invalid){
          Object.values(this.ratingForm.controls).forEach(control => {
            control.markAsTouched();
        });
      return;
      }
      const formData = new FormData();


      formData.append('content',this.ratingForm.value.title??"");

      formData.append('rating',this.rating.toString() ?? "0");
      const rating={
        value:this.rating,
        content:this.ratingForm.value.content
    }

    if(this.resourse=="course"){
      this.ratingService.addRatingToCourse(this.courseId,rating).subscribe({
        next:result=>{
          console.log(result);

          this.navigateToResource();
        },
        error:err=>{this.error=err?.error?.message||err?.error?.detail|| "Something went Wrong :(";}
      })
    }

    if(this.resourse=="chapter"){
      this.ratingService.addRatingToChapter(this.chapterId||0,rating).subscribe({
        next:result=>{
          console.log(result);

          this.navigateToResource();
        },
        error:err=>{
          console.log(err)
          this.error=err?.error?.message||err?.error?.detail||"Something went Wrong :(";}
      })
    }

    if(this.resourse=="course-summary"){
      this.ratingService.addRatingToSummary(this.summaryId||0,rating).subscribe({
        next:result=>{
          console.log(result);

          this.navigateToResource();
        },
        error:err=>{this.error=err?.error?.message||err?.error?.detail||"Something went Wrong :(";}
      })
    }

    if(this.resourse=="chapter-summary"){
      this.ratingService.addRatingToCourse(this.courseId,rating).subscribe({
        next:result=>{
          console.log(result);

          this.navigateToResource();
        },
        error:err=>{this.error=err?.error?.message||err?.error?.detail||"Something went Wrong :(";}
      })
    }


  }
  getRatingResult(rating:number){
        this.rating=rating;
        console.log(this.rating)
  }
  onReset() {
    this.ratingForm.reset();
  }
}
