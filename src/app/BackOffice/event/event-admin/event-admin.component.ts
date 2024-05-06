import { Component } from '@angular/core';
import {EventService} from "../../../FrontOffice/services/event/event.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-event-admin',
  templateUrl: './event-admin.component.html',
  styleUrls: ['./event-admin.component.css']
})
export class EventAdminComponent {
  items: any[] = [];



  constructor(private sampleService: EventService, private router: Router) { }

  ngOnInit() {
    this.sampleService.getAllEvents().subscribe(data => {
      this.items = data;
      console.log(data)
      this.items.forEach(event => {
        this.generateQRCode(event.idEvent.toString(), 'qrCodeCanvas_' + event.idEvent);
      });
    });
  }


  deleteEvent(id: number): void {
    this.sampleService.deleteEvent(id).subscribe(() => {
      this.items = this.items.filter(event => event.id !== id);
      window.location.reload();
    });
  }

  participate(id:number):void{
    this.sampleService.participate(id);
    this.router.navigate(['/admin/updateEvent', id]);

  }


  generateQRCode(text: string, elementId: string): void {
    // Ensure the DOM is fully loaded before attempting to access elements
    document.addEventListener('DOMContentLoaded', () => {
      // Retrieve the canvas element
      const qrCodeElement = document.getElementById(elementId) as HTMLCanvasElement;
      if (!qrCodeElement) {
        console.error('Canvas element not found:', elementId);
        return;
      }

      // Get the 2D context of the canvas
      const context = qrCodeElement.getContext('2d');
      if (!context) {
        console.error('Canvas context not available.');
        return;
      }

      // Clear the canvas before rendering the QR code
      context.clearRect(0, 0, qrCodeElement.width, qrCodeElement.height);

      // Render the QR code onto the canvas
      /*   QRCode.toCanvas(qrCodeElement, text, (error) => {
           if (error) {
             console.error('Error generating QR code:', error);
           } else {
             console.log('QR code generated successfully');
           }
         }); */
    });
  }



}
