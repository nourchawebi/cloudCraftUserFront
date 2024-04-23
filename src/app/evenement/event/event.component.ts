import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {EventService} from "../../service/event/event.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  items: any[] = [];
  // qrCodeData!: string;
  qrCodeImageSrc!: string;
  @ViewChild('content') content!: TemplateRef<any>;
  public myAngularxQrCode!: string;


  constructor(private sampleService: EventService,private modalService: NgbModal) {

    this.myAngularxQrCode = 'Your QR code data string';
  }

  ngOnInit() {
    this.sampleService.getAllEvents().subscribe(data => {
      this.items = data;
      this.items.forEach(event => {
        // Generate QR code data for each event (assuming event.idEvent is the relevant data)
        const qrCodeData = JSON.stringify({ eventId: event.idEvent });
        // Assign the QR code data to myAngularxQrCode
        this.myAngularxQrCode = qrCodeData;
        // Now you can use qrCodeData to generate QR code image or send it to be displayed in the UI
        // You can also assign qrCodeData to a property of event if needed
      });
    });
  }


  deleteEvent(id: number): void {
    this.sampleService.deleteEvent(id).subscribe(() => {
      this.items = this.items.filter(event => event.id !== id);
      window.location.reload();
    });
  }



  cancelparticipate(id:number):void{
    this.sampleService.cancelparticipate(id);}



  participate(id:number):void{
    this.sampleService.participate(id);

    this.openModal()

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


