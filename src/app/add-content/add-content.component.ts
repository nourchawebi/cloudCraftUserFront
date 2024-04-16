import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContentCategory } from '../services/api/models/enums/content-category';
import { ChapterService } from '../services/api/chapter/chapter.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent {
  categories=Object.keys(ContentCategory);
  defaultOption=this.categories[0];
  chapterId=this.activeRoute.snapshot.params["chapterId"];
  courseId=this.activeRoute.snapshot.params["courseId"];
  chapterUrl=`/courses/${this.courseId}/chapters/${this.chapterId}`;
  
  addContentForm:FormGroup=new FormGroup({
    title:new FormControl("",[Validators.required,Validators.minLength(3)]),
    description:new FormControl("",[Validators.required,Validators.minLength(3)]),
    contentCategory:new FormControl(""),
    contentFiles:new FormControl(null,[Validators.required]),
  })
  selectedFiles:Array<File>=[];
  error:string|null=null;
 
 
  constructor(private chapterService:ChapterService,private activeRoute:ActivatedRoute,private router:Router){

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
  navigateToChapter(){
    this.router.navigate([this.chapterUrl])
  }
  onSubmit(){


    if(this.addContentForm.invalid){
      Object.values(this.addContentForm.controls).forEach(control => {
        control.markAsTouched();
    });
  return;
  }
    const formData = new FormData();
    formData.append('contentTitle',this.addContentForm.value.title??"");
    
    formData.append('contentCategory', this.addContentForm.value.contentCategory||this.defaultOption);
    if( this.selectedFiles.length!=0)  for (let i = 0; i < this.selectedFiles.length; i++) {
      formData.append('files', this.selectedFiles[i]);
    };

    formData.append('contentDescription',this.addContentForm.value.description??"");
  console.log(formData);
    console.log(formData);
    this.chapterService.addContentToChapter(this.chapterId,formData).subscribe({
      next:result=>{
        console.log(result);
        this.router.navigate([this.chapterUrl])
      },
      error:err=>{this.error=err?.error?.message||"Something went Wrong :("}
    })


  }
  onReset() {
    this.addContentForm.reset();
  }

}
