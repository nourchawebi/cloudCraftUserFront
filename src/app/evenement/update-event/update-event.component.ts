import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
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
    this.eventService.findEventById(this.id).subscribe(eventData => {
      this.currentEvent = eventData;
      console.log('Current Event:', this.currentEvent); // Add this line to debug
      // Utilisez patchValue pour mettre à jour les valeurs du formulaire
      this.updateForm = new FormGroup({
        title: new FormControl(this.currentEvent.title, Validators.required),
        dateBegin: new FormControl(this.currentEvent.dateBegin, Validators.required),
        dateEnd: new FormControl(this.currentEvent.dateEnd, Validators.required),
        location: new FormControl(this.currentEvent.location, Validators.required),
        details: new FormControl(this.currentEvent.details, Validators.required),
        description: new FormControl(this.currentEvent.description, Validators.required),
        capacity: new FormControl(this.currentEvent.capacity, [Validators.required, Validators.min(1)]),
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

  currentDate = new Date(); // Get the current date

  validateDates(dateBegin: Date, dateEnd: Date): boolean {
    // Compare start and end dates
    return dateBegin <= dateEnd;
  }


}

