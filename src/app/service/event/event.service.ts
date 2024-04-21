import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Event} from "../../models/event";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://localhost:8089/api/event';

  constructor(private http: HttpClient) { }



  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/getAll`);
  }
  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${this.baseUrl}/create`, event);
  }
  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
  updateEvent(id: number, event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.baseUrl}/update/${id}`, event);
  }


  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.baseUrl}/eventsByid/${id}`);
  }

  participate(id:number):void{
    this.http.post(`${this.baseUrl}/${id}/participate/${2}`, null).subscribe(
      (response: any) : void => {
        console.log('Response:', response);
      },
      (error: HttpErrorResponse) => {
        console.error('Error:', error);
      }
    );
  }

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




  // getAllEventsQR(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/getEventQRcode`);
  // }
}

