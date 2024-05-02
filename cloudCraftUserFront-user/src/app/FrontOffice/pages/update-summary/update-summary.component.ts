import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PayloadSerialization } from '../../../services/api/models/payload-serialization';
import { SummaryRepresentation } from '../../../services/api/models/summary-representation';
import { SummaryService } from '../../../services/api/summary/summary.service';
import { NavigationService } from '../../../services/navigation/navigation.service';

@Component({
  selector: 'app-update-summary',
  templateUrl: './update-summary.component.html',
  styleUrls: ['./update-summary.component.css']
})
export class UpdateSummaryComponent implements OnInit {
  error:string|null=null;
  resource=this.activeRoute.snapshot.params["chapterId"]==null?"courses":"chapters";
  resourceId=this.resource=="chapters"? this.activeRoute.snapshot.params["chapterId"]:this.activeRoute.snapshot.params["courseId"];
  backrUrl=this.resource=="chapters"?`/user/courses/${this.activeRoute.snapshot.params["courseId"]}/chapters/${this.resourceId}`:
  `/user/courses/${this.activeRoute.snapshot.params["courseId"]}`;

  summaryId=this.activeRoute.snapshot.params["summaryId"];

  summary!:SummaryRepresentation;
  updateSummaryForm!:FormGroup;
  // selectedFiles:Array<File>=[];

  constructor(private summaryService:SummaryService, private activeRoute:ActivatedRoute,private navigationService:NavigationService){

  }
  ngOnInit(): void {

    this.summaryService.getSummary(this.summaryId).subscribe({
      next:summary=>{
        this.summary=PayloadSerialization.getSummaryRepresentation(summary);
        this.updateSummaryForm=new FormGroup({
          title:new FormControl(this.summary.title,[Validators.required,Validators.minLength(3)]),
          description:new FormControl(this.summary.description,[Validators.required,Validators.minLength(3)]),
          // summaryFiles:new FormControl([],[Validators.required]),
        })
      },
      error:err=>{
        this.error=err?.error?.message||"something went wrong";
        console.log(err)
      }
    })

  }
  navigateToResource(){
    console.log()
    this.navigationService.navigate(this.backrUrl)
  }
  onSubmit(){
    if(this.updateSummaryForm.invalid){
      Object.values(this.updateSummaryForm.controls).forEach(control => {
        control.markAsTouched();
    });
  return;
  }
    const summaryData={
      title:this.updateSummaryForm.value.title,
      description:this.updateSummaryForm.value.description
    }
    console.log(summaryData)

  this.summaryService.updateSummary(this.summaryId,summaryData).subscribe({
    next:result=>{
      console.log(result);
      this.navigationService.navigate(this.backrUrl)
    },
    error:err=>{this.error=err?.error?.message||"Something went Wrong :("
      console.log(err)
    }

  })
 }

  onReset() {
    this.updateSummaryForm.reset();
  }
}
