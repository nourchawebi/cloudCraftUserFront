import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  readonly!:boolean;
  @Input()
  initialRate!:number;
  @Output() ratingResult = new EventEmitter<number>();

  ratingcontroll=new FormControl(0);

  click(){
    console.log(this.readonly);
  }

  ngOnInit(): void {
    
  }
  getRatingValue(event:number){
    this.ratingResult.emit(event);
  }

}
