import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import {EventService} from "../../../FrontOffice/services/event/event.service";
import {Event} from "../../../models/event";


@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  id!: number;
  updateForm!: FormGroup;
  currentEvent!: Event;
  selectedFile!: File;

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.eventService.getEventById(this.id).subscribe(eventData => {
      this.currentEvent = eventData;
      console.log('Current Event:', this.currentEvent); // Add this line to debug
     // Utilisez patchValue pour mettre à jour les valeurs du formulaire
     this.updateForm = new FormGroup({
        title: new FormControl(this.currentEvent.title, Validators.required),
        dateBegin: new FormControl(this.currentEvent.dateBegin, Validators.required),
        dateEnd: new FormControl('', Validators.required),
        location: new FormControl(this.currentEvent.location, Validators.required),
        details: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        capacity: new FormControl(0, [Validators.required, Validators.min(1)]),
        picture: new FormControl('', Validators.required)
      });
    });
  }


  updateEvent() {
    if (this.updateForm.valid) {
      this.eventService.updateEvent(this.id, this.updateForm.value, this.selectedFile).subscribe(
        () => {
          console.log('Événement mis à jour avec succès');
          this.router.navigate(['/admin/event-admin']);
        },
        error => {
          console.error('Erreur lors de la mise à jour de l\'événement', error);
        }
      );
    } else {
      console.error('Le formulaire n\'est pas valide');
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }



}

