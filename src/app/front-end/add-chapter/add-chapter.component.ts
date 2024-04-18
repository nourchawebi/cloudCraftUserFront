import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/api/courses/course.service';
import { ChapterRequestRepresentation } from '../../services/api/models/chapter-request-representation';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-add-chapter',
  templateUrl: './add-chapter.component.html',
  styleUrls: ['./add-chapter.component.css']
})
export class AddChapterComponent {
  addChapterForm: FormGroup=new FormGroup({
    title:new FormControl("",[Validators.required,Validators.minLength(3)]),
    description:new FormControl("",[Validators.required,Validators.minLength(3)]),
  });

courseId:number=this.route.snapshot.params["courseId"];
error:string|null=null;

  constructor(private navigationService:NavigationService,private route: ActivatedRoute,private coursesService:CourseService){

  }


  public navigateToCourse(){
    this.navigationService.navigateToCourseDetails(this.courseId);
  }
  onSubmit() {
    
      // Form is valid, handle the submission
      
      // You can send the form data to an API, perform further actions, etc.
      if(this.addChapterForm.invalid){
        Object.values(this.addChapterForm.controls).forEach(control => {
          control.markAsTouched();
      });
    return;
    }
    const newChapter:ChapterRequestRepresentation={
        title:this.addChapterForm.value.title??"",
        description:this.addChapterForm.value.description??""
    }
      this.coursesService.affectChapter(this.courseId,newChapter).subscribe({
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
    this.addChapterForm.reset();
  }

 

}
