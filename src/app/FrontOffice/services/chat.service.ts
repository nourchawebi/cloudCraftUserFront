import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import {EventService} from "./event/event.service";

export class Message {
  constructor(public author: string, public content: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  audioFile = new Audio(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3"
  );
  constructor(private eventService: EventService) {}

  conversation = new Subject<Message[]>();

  messageMap: { [key: string]: string } = {
    Hi: "Hello",
    "Who are you": "My name is Agular Bot",
    "What is Angular": "Angular is the best framework ever",
    "what are the current events": "",

    default: "hello welcome to EduHub! how can i help you"
  };

  async getBotAnswer(msg: string) {
    const userMessage = new Message("user", msg);
    this.conversation.next([userMessage]);

    if (msg.toLowerCase().includes('current events')) {
      const eventsMessage = new Message("bot", await this.eventService.getCurrentEventsFormatted());
      this.conversation.next([eventsMessage]);
    } else if (msg.toLowerCase().includes('coming events')) {
      const eventsMessage = new Message("bot", await this.eventService.getComingEventsFormatted());
      this.conversation.next([eventsMessage]);
    } else {
      const botMessage = new Message("bot", this.getBotMessage(msg));
      setTimeout(() => {
        this.playFile();
        this.conversation.next([botMessage]);
      }, 1500);
    }
  }

  // getBotAnswer(msg: string) {
  //   const userMessage = new Message("user", msg);
  //   this.conversation.next([userMessage]);
  //   const botMessage = new Message("bot", this.getBotMessage(msg));
  //
  //   setTimeout(() => {
  //     this.playFile();
  //     this.conversation.next([botMessage]);
  //   }, 1500);
  // }

  playFile() {
    this.audioFile.play();
  }


  getBotMessage(question: string) {
    let answer = this.messageMap[question];
    return answer || this.messageMap["default"];
  }
}
