import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ChatService, Message} from "../../service/chat.service";
import {EventService} from "../../service/event/event.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: Message[] = [];
  value!: string;
  @ViewChild('contents') contents!: TemplateRef<any>;
  constructor(public chatService: ChatService,private eventService: EventService,private modalService: NgbModal) { }

  ngOnInit() {
    this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });
  }

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









}
