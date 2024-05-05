import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {EventService} from "../../service/event/event.service";
import {Event} from "../../models/event";
import {ActivatedRoute} from "@angular/router";
import {observable} from "rxjs";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {

  eventId!: number;
  eventDetails: any[] = [];

  constructor(private route: ActivatedRoute, private eventService: EventService) {}

  ngOnInit() {
        this.route.paramMap.subscribe(params => {

      // @ts-ignore
           this.eventId = +params.get('id');
      this.eventService.selectEventById(this.eventId).subscribe(data => {
          this.eventDetails = data;
        },
        (error) => {
          console.error('Error fetching event details:', error);
        }
      );
        });
  }






}
