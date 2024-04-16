import { Component, OnInit } from '@angular/core';
import { SummaryRepresentation } from '../../services/api/models/summary-representation';
import { SummaryService } from '../../services/api/summary/summary.service';
import { ActivatedRoute } from '@angular/router';
import { PayloadSerialization } from '../../services/api/models/payload-serialization';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-summary-details',
  templateUrl: './summary-details.component.html',
  styleUrls: ['./summary-details.component.css']
})
export class SummaryDetailsComponent implements OnInit {
  summary!:SummaryRepresentation;
  summaryId:number=this.route.snapshot.params["summaryId"]
  courseId:number=this.route.snapshot.params["courseId"]

  constructor(private summaryService:SummaryService,private route:ActivatedRoute ,private navigationService:NavigationService){

  }
  ngOnInit(): void {
    this.summaryService.getSummary(this.summaryId)
    .subscribe({
      next:summary=>{
          this.summary=PayloadSerialization.getSummaryRepresentation(summary);
          console.log(summary);
          console.log(this.summary);
      },
      error:err=>{
        console.log(err);
      }
    });
  }
  navigateToCourse(){
    this.navigationService.navigateToCourseDetails(this.courseId);
  }




}
