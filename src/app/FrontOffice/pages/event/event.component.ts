import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {EventService} from "../../services/event/event.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  items: any[] = [];
  // qrCodeData!: string;
  qrCodeImageSrc!: string;
  isParticipating = false; // Track participation status


  @ViewChild('content') content!: TemplateRef<any>;
  public myAngularxQrCode!: string;


  constructor(private sampleService: EventService,private modalService: NgbModal) {

    this.myAngularxQrCode = 'Your QR code data string';
  }

  ngOnInit() {
    this.sampleService.getAllEvents().subscribe(data => {
      this.items = data;
      this.items.forEach(event => {
        const qrCodeData = JSON.stringify({
          message: "Thanks for participating for this event!",
          title: event.title,
          date: event.date,
          location: event.location

        });        this.myAngularxQrCode = qrCodeData;

      });
    });
  }






  cancelparticipate(id:number):void{
    this.sampleService.cancelparticipate(id);
  }


  participate(id: number): void {
    this.sampleService.participates(id).subscribe(
      () => {
        // Subscription success callback: open the modal
        this.openModal();
      },
      (error: HttpErrorResponse) => {
        // Subscription error callback: handle error
        if (error.status === 400 && error.error === 'User is already participating in the event.') {
          // Show an alert if the user is already participating
          alert('You are already participating in this event.');
        }
        else if
        (error.error === 'Event capacity has been reached. Cannot participate.') {
          //           // Show an alert if the event capacity is full
                    alert('Event capacity has been reached. Cannot participate.');
        }

        else {
          console.error('Error:', error);

          if (!(error.status === 400 && error.error === 'User is already participating in the event.')) {
            this.openModal();
          }
        }
      }
    );
  }





  openModal() {
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      // Handle close or dismiss
    }, (reason) => {
      // Handle dismiss
    });
  }



// Method to handle QR code scanning
  onQRCodeScanned(qrCodeData: string) {
    // Parse the scanned QR code data
    const eventData = JSON.parse(qrCodeData);
    // Retrieve the event details using the parsed data
    const eventId = eventData.eventId;
    // Now you can use eventId to fetch the event details from the backend or wherever they are stored
    console.log('Scanned event ID:', eventId);
    // You can then open a modal or display the event details as needed
    // this.modalService.open(this.content);
  }




}


