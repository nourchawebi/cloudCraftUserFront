import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from '../../../services/navigation/navigation.service';
import { ChapterService } from '../../../services/api/chapter/chapter.service';
import { CourseService } from '../../../services/api/courses/course.service';

@Component({
  selector: 'app-add-summary',
  templateUrl: './add-summary.component.html',
  styleUrls: ['./add-summary.component.css']
})
export class AddSummaryComponent {
  error:string|null=null;
  resource=this.activeRoute.snapshot.params["chapterId"]==null?"courses":"chapters";
  resourceId=this.resource=="chapters"? this.activeRoute.snapshot.params["chapterId"]:this.activeRoute.snapshot.params["courseId"];
  backrUrl=this.resource=="chapters"?`/user/courses/${this.activeRoute.snapshot.params["courseId"]}/chapters/${this.resourceId}`:
  `/user/courses/${this.activeRoute.snapshot.params["courseId"]}`;

  addSummaryForm:FormGroup=new FormGroup({
    title:new FormControl("",[Validators.required,Validators.minLength(3)]),
    description:new FormControl("",[Validators.required,Validators.minLength(3)]),
    summaryFiles:new FormControl([],[Validators.required]),
  })
  selectedFiles:Array<File>=[];

  constructor(private chapterService:ChapterService,private coursesService:CourseService, private activeRoute:ActivatedRoute,private navigationService:NavigationService){

  }


  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    this.selectedFiles=[];
    if (files && files.length > 0) {

      for (let i = 0; i < files.length; i++) {
        const file: File = files[i];
        // Process each file here, for example, upload or display information about the file
        this.selectedFiles.push(file);
        console.log('Selected file:', file.name);
      }
    }
  }
  navigateToResource(){
    console.log()
    this.navigationService.navigate(this.backrUrl)
  }
  onSubmit(){
    if(this.addSummaryForm.invalid){
      Object.values(this.addSummaryForm.controls).forEach(control => {
        control.markAsTouched();
    });
  return;
  }
    const formData = new FormData();
    formData.append('title',this.addSummaryForm.value.title??"");

    if( this.selectedFiles.length!=0)  for (let i = 0; i < this.selectedFiles.length; i++) {
      formData.append('files', this.selectedFiles[i]);
    };

    formData.append('description',this.addSummaryForm.value.description??"");
 if(this.resource=="courses"){
  this.coursesService.addSummaryToCourse(this.resourceId,formData).subscribe({
    next:result=>{
      console.log(result);
      this.navigationService.navigate(this.backrUrl)
    },
    error:err=>this.error=err?.error?.message||"Something went Wrong :("
  })
 }else if(this.resource=="chapters"){
  this.chapterService.addSummaryToChapter(this.resourceId,formData).subscribe({
    next:result=>{
      console.log(result);
      this.navigationService.navigate(this.backrUrl)
    },
    error:err=>{this.error=err?.error?.message||"Something went Wrong :(";}
  })
 }



  }
  onReset() {
    this.addSummaryForm.reset();
  }
}
