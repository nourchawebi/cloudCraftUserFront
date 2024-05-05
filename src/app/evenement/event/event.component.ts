import {Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {EventService} from "../../service/event/event.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Event} from "../../models/event";
import {HttpErrorResponse} from "@angular/common/http";
import {EventDetailsComponent} from "../event-details/event-details.component";
import {ChatService, Message} from "../../service/chat.service";
import {ActivatedRoute} from "@angular/router";
import * as htmlToImage from 'html-to-image';

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
///////chat
  messages: Message[] = [];
  value!: string;
  @ViewChild('contents') contents!: TemplateRef<any>;
  eventId!: number;
  eventDetails: any[] = [];

  constructor(private route: ActivatedRoute,private sampleService: EventService,private modalService: NgbModal,public chatService: ChatService) {

    this.myAngularxQrCode = ' QR code data string';
  }

  ngOnInit() {
    this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });
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


    this.route.paramMap.subscribe(params => {

      // @ts-ignore
      this.eventId = +params.get('id');
      this.sampleService.selectEventById(this.eventId).subscribe(data => {
          this.eventDetails = data;
        },
        (error) => {
          console.error('Error fetching event details:', error);
        }
      );
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

//////////////////////////////////////////chat
  sendMessage() {
    this.chatService.getBotAnswer(this.value);
    this.value = '';
  }
  getCurrentEvents() {
    this.chatService.getBotAnswer('Current Events');
  }

  openChatPopup() {
    var popup = document.getElementById("chatPopup");
    if (popup) {
      popup.style.display = "block";
    }
  }




  openModals() {
    this.modalService.open(this.contents, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      // Handle close or dismiss
    }, (reason) => {
      // Handle dismiss
    });
  }



  generateImage() {
    const node: any = document.getElementById('image-section');

    // Using html-to-image
    htmlToImage.toPng(node)
      .then((dataUrl) => {
        // Create a temporary link to trigger the download
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'my_image.png'; // Set the desired filename
        link.click();
      })
      .catch((error) => {
        console.error('Oops, something went wrong!', error);
      });
  }
  downloadImage() {
    const element = document.getElementById('yourHtmlElementId');

    if (element) {
      htmlToImage.toPng(element)
        .then((dataUrl: string) => {
          const link = document.createElement('a');
          link.download = 'page_image.png';
          link.href = dataUrl;
          link.click();
        })
        .catch((error: any) => {
          console.error('Error:', error);
        });
    } else {
      console.error('Element with id "yourHtmlElementId" not found.');
    }
  }

}


