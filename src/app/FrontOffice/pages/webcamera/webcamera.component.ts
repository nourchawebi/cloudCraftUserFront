import { Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import {MatDialogRef} from "@angular/material/dialog";
import {AuthenticationService} from "../../services/auth/authentication.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-webcamera',
  templateUrl: './webcamera.component.html',
  styleUrls: ['./webcamera.component.css']
})
export class WebcameraComponent {

  constructor(private authService: AuthenticationService,
              private router:Router,


  )
  {}

  stream: any = null;
  status: any = null;
  trigger: Subject<void> = new Subject();
  previewImage: string = '';
  btnLabel: string = 'Capture image';

  get $trigger(): Observable<void> {
    return this.trigger.asObservable();
  }

  snapshot(event: WebcamImage) {
    console.log(event);
    this.previewImage = event.imageAsDataUrl;
    this.btnLabel = 'Re capture image'

  }
 download() {
    if (this.previewImage) {
      const downloadLink = document.createElement('a');
      downloadLink.download = `Capture-${Math.floor(Date.now() / 1000)}.jpg`;
      // Log the data URL to the console
      // Set the image source to the data URL



      downloadLink.href = this.previewImage;
      this.authService.setPreviewImage(downloadLink.href);
      console.log(downloadLink)
      downloadLink.click();
    } else {
      alert('Please capture an image to download it');
    }
  }
  checkPermissions() {
    navigator.mediaDevices.getUserMedia({
      video: true
    }).then((res) => {
      console.log("response", res);
      this.stream = res;
      this.status = 'My camera is accessing';
      this.btnLabel = 'Capture image';

    }).catch(err => {
      console.log(err);
      if(err?.message === 'Permission denied') {
        this.status = 'Permission denied please try again by approving the access';
      } else {
        this.status = 'You may not having camera system, Please try again ...';
      }
    })
  }



  captureImage() {
    this.trigger.next();
  }

  proceed() {
    console.log(this.previewImage);
  }
}
