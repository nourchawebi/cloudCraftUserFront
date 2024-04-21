import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import {EventService} from "../../service/event/event.service";
import {Event} from "../../models/event";


@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  id!: number;
  updateForm: FormGroup; // Initialisation ici sans le '!'
  currentEvent!: Event;

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private router: Router
  ) {
    // Initialisez le FormGroup ici dans le constructeur
    this.updateForm = new FormGroup({
      title: new FormControl('', Validators.required),
      dateBegin: new FormControl('', Validators.required),
      dateEnd: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      details: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      capacity: new FormControl(0, [Validators.required, Validators.min(1)])
    });
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.eventService.getEventById(this.id).subscribe(eventData => {
      this.currentEvent = eventData;
      console.log('Current Event:', this.currentEvent); // Add this line to debug
      // Utilisez patchValue pour mettre à jour les valeurs du formulaire
      this.updateForm.patchValue({
        title: this.currentEvent.title,
        dateBegin: this.currentEvent.dateBegin,
        dateEnd: this.currentEvent.dateEnd,
        location: this.currentEvent.location,
        details: this.currentEvent.details,
        description: this.currentEvent.description,
        capacity: this.currentEvent.capacity
      });
    });
  }


  updateEvent() {
    if (this.updateForm.valid) {
      this.eventService.updateEvent(this.id, this.updateForm.value).subscribe(
        () => {
          console.log('Événement mis à jour avec succès');
          this.router.navigate(['/Home']); // Redirection vers la page d'accueil ou la liste des événements
        },
        error => {
          console.error('Erreur lors de la mise à jour de l\'événement', error);
        }
      );
    } else {
      console.error('Le formulaire n\'est pas valide');
    }
  }
}

