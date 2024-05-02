import { Component, OnInit } from '@angular/core';
import {ChatService, Message} from "../../services/chat.service";
import {EventService} from "../../services/event/event.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: Message[] = [];
  value!: string;

  constructor(public chatService: ChatService,private eventService: EventService) { }

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


}
