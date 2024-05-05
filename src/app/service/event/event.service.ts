import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Event} from "../../models/event";
import { MatDialog } from '@angular/material/dialog';
import * as url from "url";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://localhost:8089/api/event';

  constructor(private http: HttpClient) { }

  findMostEvents(){
    return this.http.get<any>(`${this.baseUrl}/count-by-month`);
  }

  findMostParticipatedEvent() {
    return this.http.get<any>(`${this.baseUrl}/most-participated-event`);
  }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/getAll`);
  }
  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${this.baseUrl}/create`, event);
  }

  AddEvent(event: Event,file: File): Observable<Event> {
  const forumdata= new FormData();
  forumdata.append("title",event.title);
    forumdata.append("location",event.location);
    forumdata.append("dateBegin",event.dateBegin.toString());
    forumdata.append("dateEnd",event.dateEnd.toString());
   forumdata.append("picture",file);
    forumdata.append("description",event.description)
    forumdata.append("capacity",event.capacity.toString())
    forumdata.append("details",event.details);
    return  this.http.post<Event>(`${this.baseUrl}/addEvent`, forumdata);
  }

  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
  updateEvent(id: number, event: Event,file: File): Observable<Event> {
    const forumdata= new FormData();
    forumdata.append("title",event.title);
    forumdata.append("location",event.location);
    forumdata.append("dateBegin",event.dateBegin.toString());
    forumdata.append("dateEnd",event.dateEnd.toString());
    forumdata.append("picture",file);
    forumdata.append("description",event.description);
    forumdata.append("capacity",event.capacity.toString());
    forumdata.append("details",event.details);
    return this.http.put<Event>(`${this.baseUrl}/update/${id}`, forumdata);
  }

    getEventById(id: number): Observable<Event> {
      return this.http.get<Event>(`${this.baseUrl}/events/${id}`);
    }
  findEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.baseUrl}/findevents/${id}`);
  }

  selectEventById(id: number): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/events/${id}`);
  }




  participate(id: number): void {
    this.http.post(`${this.baseUrl}/${id}/issparticipate/${2}`, null).subscribe(
      (response: any) => {
        console.log('Response:', response);
      },
      (error: HttpErrorResponse) => {
        if (error.status === 400 && error.error === 'User is already participating in the event.') {

        }
        console.error('Error:', error);
      }
    );
  }


  participates(id: number): Observable<Event> {
    return this.http.post<Event>(`${this.baseUrl}/${id}/issparticipate/${2}`, null);
  }


  // participate(id:number):void{
  //   this.http.post(`${this.baseUrl}/${id}/issparticipate/${2}`, null).subscribe(
  //     (response: any) : void => {
  //       console.log('Response:', response);
  //     },
  //     (error: HttpErrorResponse) => {
  //       console.error('Error:', error);
  //     }
  //   );
  // }

  cancelparticipate(id:number):void{
    this.http.post(`${this.baseUrl}/${id}/cancelParticipation/${2}`, {}).subscribe(
      (response) => {
        console.log('Response:', response);
      },
      (error: HttpErrorResponse) => {
        console.error('Error:', error);
      }
    );
  }

  /////////////////////////////////////////////for the chat

  async getCurrentEventsFormatted(): Promise<string> {
    const events = await this.getAllEvents().toPromise();
    // Assuming events have a "name" property, you can format them here
    // @ts-ignore
    const eventNames = events.map(event => event.title).join(', ');
    return eventNames || 'No events available';
  }



  async getComingEventsFormatted(): Promise<string> {
    const events = await this.getAllEvents().toPromise();
    // @ts-ignore
    const upcomingEvents = events.filter(event => new Date(event.dateBegin) > new Date());
    if (upcomingEvents.length > 0) {
      const eventNames = upcomingEvents.map(event => event.title).join(', ');
      return eventNames;
    } else {
      return 'No upcoming events';
    }
  }


  // getAllEventsQR(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/getEventQRcode`);
  // }
}

