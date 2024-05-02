import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {EventService} from "../../services/event/event.service";
import {Event} from "../../../models/event";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  eventId!: number;
  eventDetails!: Event;

  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // @ts-ignore
      this.eventId = +params.get('id');
      this.eventService.getEventById(this.eventId).subscribe(
        (event: Event) => {
          this.eventDetails = event;
        },
        (error) => {
          console.error('Error fetching event details:', error);
        }
      );
    });
  }
}
