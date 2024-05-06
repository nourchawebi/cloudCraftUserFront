import {Component, OnInit} from '@angular/core';
import {
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  EventSettingsModel
} from '@syncfusion/ej2-angular-schedule';
import {JourneyService} from "../../../services/journey.service";
import {ActivatedRoute} from "@angular/router";
import {Journey} from "../../../models/journey";
import {th} from "date-fns/locale";

@Component({
  selector: 'app-calendar-journey',
  providers: [DayService,WeekService,WorkWeekService,MonthService,AgendaService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate'
  [eventSettings]='eventSettings'></ejs-schedule>`
})
export class CalendarJourneyComponent implements OnInit{

  constructor(private activatedRoute:ActivatedRoute, private journeyService:JourneyService) {
  }

  journeys:Journey[]|undefined = [];
  ngOnInit(): void {
    this.journeyService.getAllParticipatedAt().subscribe(value => {
      this.journeys=value
      if(this.journeys?.length)
        for(let j of this.journeys){
          console.log(Number(j.returnTime.substring(0,2)))
          this.data.push({
            id: j.journeyId,
            eventName: 'Leaving',
            startTime: new Date(Number(j.day.substring(0, 4)), Number(j.day.substring(5, 7)), Number(j.day.substring(8, 10)), Number(j.leavingTime.substring(0,2)), Number(j.leavingTime.substring(0,2))),
            endTime: new Date(Number(j.day.substring(0, 4)), Number(j.day.substring(5, 7)), Number(j.day.substring(8, 10)), Number(j.leavingTime.substring(0,2)), Number(j.leavingTime.substring(0,2))+30),
            isAllDay: false
          })

          this.data.push({
            id: j.journeyId,
            eventName: 'Return',
            startTime: new Date(Number(j.day.substring(0, 4)), Number(j.day.substring(5, 7)), Number(j.day.substring(8, 10)), Number(j.returnTime.substring(0,2)), Number(j.returnTime.substring(0,2))),
            endTime: new Date(Number(j.day.substring(0, 4)), Number(j.day.substring(5, 7)), Number(j.day.substring(8, 10)), Number(j.returnTime.substring(0,2)), Number(j.returnTime.substring(0,2))+30),
            isAllDay: false
          })
        }
      this.eventSettings = {
        dataSource: this.data,
        fields: {
          id: 'id',
          subject: { name: 'eventName' },
          isAllDay: { name: 'isAllDay' },
          startTime: { name: 'startTime' },
          endTime: { name: 'endTime' },
        }
      }
      console.log(this.eventSettings)
    })
    this.activatedRoute.paramMap.subscribe(res=>{
      this.id=Number(res.get("id"))
    })
  }

  id:number=0;


  public data: object [] = [{
    id: 2,
    eventName: 'Meeting',
    startTime: new Date(2018, 1, 15, 10, 0),
    endTime: new Date(2018, 1, 15, 12, 30),
    isAllDay: false
  }];
  public selectedDate: Date = new Date();
  public eventSettings: EventSettingsModel = {
    fields: {
      id: 'id',
      subject: { name: 'eventName' },
      isAllDay: { name: 'isAllDay' },
      startTime: { name: 'startTime' },
      endTime: { name: 'endTime' },
    }
  };


}
