import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {JourneyService} from "../../../../services/journey.service";
import {Journey} from "../../../../models/journey";
import {ActivatedRoute} from "@angular/router";
import {FormControl} from "@angular/forms";
import {DataService} from "../../../../services/data.service";
import {Motorized} from "../../../../models/motorized";
import {User} from "../../../../models/user";
import {FeedbackService} from "../../../../services/feedback.service";
import {Feedback} from "../../../../models/feedback";
import {toDate} from "date-fns";
import {th} from "date-fns/locale";
import {ParticipationService} from "../../../../services/participation.service";

@Component({
  selector: 'app-journey-details',
  templateUrl: './journey-details.component.html',
  styleUrls: ['./journey-details.component.css']
})
export class JourneyDetailsComponent implements OnInit{
 constructor(private js:JourneyService, private act:ActivatedRoute, private dataService:DataService, private fb:FeedbackService, private participationService:ParticipationService) {
 }
  id:number=0;
  journey: Journey | undefined;
  motorized: User | undefined;
  feedbacks: Feedback[] | undefined;
  passengers: User[] | undefined;
  participated:boolean | undefined;
  avg: {
    rateNumber:number,
    rateAvg:number,
  } | undefined;

  ngOnInit(): void {
    this.act.paramMap.subscribe(res=>{
      this.id=Number(res.get("id"))
      this.js.getData(this.id).subscribe((value:Journey) => this.journey=value)
      this.js.getMotorized(this.id).subscribe((value:User) => {
        this.motorized=value
        this.fb.getAvg(value.id).subscribe(value1 => this.avg = value1)
      })

      this.fb.getData(this.id).subscribe( value => this.feedbacks = value)
      this.fb.getOne(this.id).subscribe( value => {
          if(value.comment!=null){
            this.feedback = value
            this.state="M"
          }
      }
      )

      this.participationService.getData(this.id).subscribe(value => {this.passengers=value})
      this.dataService.checkParticipation(this.id).subscribe((value :any) => {
        this.participated = value
        console.log(this.participated)
      })
    });

  }

  state:string="A";
  stateParticipation:boolean = false;
  mail={
    content:"",
    to:""
  }

  feedback:Feedback={
    id:0,
    rating:0,
    comment:"",
    createdAt:toDate(this.id),
    user:new class implements User {}
  }
  hover=0

  submit(){
    if(this.state === "A")
      this.fb.createData(this.feedback,this.journey?.journeyId).subscribe()
    else
      this.fb.updateData(this.feedback,this.journey?.journeyId).subscribe()
  }

  setRating(number: number) {
    this.feedback.rating=number
  }

  setHover(number: number) {
    this.hover=number
  }

  participate(journeyId: number | undefined){
    this.dataService.addParticipation(journeyId).subscribe(
      value => this.ngOnInit()
    );
  }

  sendMail() {
    this.mail.to!=this.motorized?.email
  }

  declineParticipation(journeyId: number | undefined) {
    this.participationService.deleteData(journeyId).subscribe(
      value => this.ngOnInit()
    );
  }
}
