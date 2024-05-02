import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Event} from "../../../models/event";
import {EventService} from "../../../FrontOffice/services/event/event.service";



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
        this.router.navigate(['/Home']);

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
}

