import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RatingUtilFunction } from 'src/app/UtilComponents/ratings/rating-util-functions';
import { ChapterService } from 'src/app/services/api/chapter/chapter.service';
import { CourseService } from 'src/app/services/api/courses/course.service';
import { ChapterRepresentation } from 'src/app/services/api/models/chapter-representation';
import { PayloadSerialization } from 'src/app/services/api/models/payload-serialization';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-update-chapter',
  templateUrl: './update-chapter.component.html',
  styleUrls: ['./update-chapter.component.css']
})
export class UpdateChapterComponent implements OnInit{
  chapter!:ChapterRepresentation;
  chapterId:number=this.route.snapshot.params["chapterId"];
  
  updateChapterForm!: FormGroup;

courseId:number=this.route.snapshot.params["courseId"];
error:string|null=null;

  constructor(private navigationService:NavigationService,private route: ActivatedRoute,private chapterService:ChapterService){

  }
  ngOnInit(): void {
    this.chapterService.getChapter(this.chapterId)
    .subscribe({
      next:chapter=>{
          this.chapter=PayloadSerialization.getChapterRepresentation(chapter);
          console.log(chapter);
          console.log(this.chapter);
          this.updateChapterForm=new FormGroup({
            title:new FormControl(this.chapter.title,[Validators.required,Validators.minLength(3)]),
            description:new FormControl (this.chapter.description,[Validators.required,Validators.minLength(3)]),          
            });
            console.log(this.updateChapterForm.value)
        
        },
      error:err=>{
        this.error=err?.error?.message||"Something went Wrong :(";
      }
    });
  }


  public navigateToCourse(){
    this.navigationService.navigateToCourseDetails(this.courseId);
  }
  onSubmit() {
    console.log(this.updateChapterForm.value)
    if(this?.updateChapterForm?.invalid){
      Object.values(this.updateChapterForm.controls).forEach(control => {
        control.markAsTouched();
    });
    return;
  }
    const chapterData={
          title:this.updateChapterForm?.value.title,
          description:this.updateChapterForm?.value.description
      }

      this.chapterService.updateChapter(this.chapterId,chapterData).subscribe({
        next:result=>{
          console.log(result);
          this.navigateToCourse();
        },
        error:err=>{
          console.log(err)
          this.error=err?.error?.message||"Something went Wrong :(";
      }})
    
    
  }

  onReset() {
    this.updateChapterForm.reset();
  }

 
}
