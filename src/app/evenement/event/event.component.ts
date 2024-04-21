import {Component, OnInit} from '@angular/core';
import {EventService} from "../../service/event/event.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  items: any[] = [];
  // qrCodeData!: string;
  qrCodeImageSrc!: string;


  constructor(private sampleService: EventService) { }

  ngOnInit() {

    this.sampleService.getAllEvents().subscribe(data => {
      this.items = data;
      this.items.forEach(event => {
        //       this.generateQRCode(event.idEvent.toString(), 'qrCodeCanvas_' + event.idEvent);
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
    // this.generateAndDisplayQRCode(id);

    // this.generateQRCode(id);
//    this.convertDataToQRImage();
  }


  generateAndDisplayQRCode(eventInfo: any): void {
    // Generate QR code using event information
    const qrCodeData = JSON.stringify(eventInfo);

    // Check if qrCodeData is not empty
    if (qrCodeData) {
      // Display QR code
      // You need to have a method or library to display QR code
      // For example, if you are using ngx-qrcode, you can use it to display the QR code
      // Import ngx-qrcode library and use it here
      // Example:
      // <qrcode [qrdata]="qrCodeData"></qrcode>
    } else {
      console.error('QR Code data is empty.');
    }
  }


  generateQRCode(id: number): void {
    const eventDetails = `Event ID: ${id}`;
    //this.qrCodeData = eventDetails;

    this.convertDataToQRImage();
  }



  convertDataToQRImage(): void {
    let qr: any;
    // @ts-ignore
    qr = qrcode(this.qrCodeData); // Use qrcode function directly
    qr.createSvgTag({ cellSize: 8 }, (err: any, qrImage: string) => {
      if (err) {
        console.error('Error converting data to QR image:', err);
      } else {
        // Cast the element to HTMLImageElement to access the 'src' property
        const qrCodeImage = document.getElementById('qrcode-image') as HTMLImageElement;
        if (qrCodeImage) {
          qrCodeImage.src = 'data:image/svg+xml;base64,' + btoa(qrImage);
        }
      }
    });
  }







}


