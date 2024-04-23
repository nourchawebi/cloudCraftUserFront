import {Component, TemplateRef, ViewChild} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent {
  @ViewChild('content') content!: TemplateRef<any>;
  public myAngularxQrCode!: string;

  constructor(private modalService: NgbModal) {
    this.myAngularxQrCode = 'Your QR code data string';
  }

  openModal() {
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      // Handle close or dismiss
    }, (reason) => {
      // Handle dismiss
    });
  }
}
