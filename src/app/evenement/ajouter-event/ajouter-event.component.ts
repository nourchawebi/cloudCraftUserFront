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

  constructor(private eventService: EventService , private router: Router) { }

  createEvent() {
    this.eventService.createEvent(this.newEvent).subscribe(
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
  }
}

