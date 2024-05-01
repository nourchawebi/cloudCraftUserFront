import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/api/courses/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  courseForm: FormGroup=new FormGroup({
    title:new FormControl("",[Validators.required,Validators.minLength(3)]),
    uneversityYear:new FormControl("FRESHMAN",Validators.required),
    description:new FormControl("",[Validators.required,Validators.minLength(3)]),
    image:new FormControl("",Validators.required),
  });
  error:string|null=null;
  selectedFile: File|null=null;

  constructor(private coursesService:CourseService,private router:Router){

  }


  public navigateToCourses(){
    this.router.navigate(["admin/courses"])
  }
  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }


  onSubmit() {
    
      // Form is valid, handle the submission
      
      // You can send the form data to an API, perform further actions, etc.
        if(this.courseForm.invalid){
          Object.values(this.courseForm.controls).forEach(control => {
            control.markAsTouched();
        });
      return;
      }
      const formData = new FormData();
      formData.append('name',this.courseForm.value.title??"");
      
      formData.append('universityYear', this.courseForm.value.uneversityYear??"");
      if( this.selectedFile)  formData.append('image', this.selectedFile);

      formData.append('description',this.courseForm.value.description??"");
      this.coursesService.createCourse(formData).subscribe({
        next:result=>{
          console.log(result);
         
          this.router.navigate(["admin/courses"]);
        },
        error:err=>{this.error=err?.error?.message||"Something went Wrong :(";}
      })
    
    
  }

  onReset() {
    this.courseForm.reset();
  }
}
