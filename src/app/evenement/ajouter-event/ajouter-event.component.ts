import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {EventService} from "../../service/event/event.service";
import {Event} from "../../models/event";



@Component({
  selector: 'app-ajouter-event',
  templateUrl: './ajouter-event.component.html',
  styleUrls: ['./ajouter-event.component.css']
})
export class AjouterEventComponent {
 newEvent: Event = new Event(0, '', new Date(), new Date(), '', '', '', 0);
  selectedFile!: File;
 // newEvent!: Event;
  constructor(private eventService: EventService , private router: Router) { }

  createEvent() {
    this.eventService.AddEvent(this.newEvent,this.selectedFile).subscribe(
      (response) => {
        console.log('Événement créé avec succès', response);
        this.router.navigate(['/admin/event-admin']);

      },

      (error) => {
        console.error('Erreur lors de la création de l’événement', error);
      }

    );
  }


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
 //   this.newEvent.picture=this.selectedFile;
  }




  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }



}

