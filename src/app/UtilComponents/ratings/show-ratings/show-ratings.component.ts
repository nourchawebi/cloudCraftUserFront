import { Component, EventEmitter, Input, Output } from '@angular/core';
import {RatingRepresentation} from "../../../services/api/models/rating-representation";
import {NavigationService} from "../../../services/navigation/navigation.service";

@Component({
  selector: 'app-show-ratings',
  templateUrl: './show-ratings.component.html',
  styleUrls: ['./show-ratings.component.css']
})
export class ShowRatingsComponent {
  @Input()
  ratings!:Array<RatingRepresentation>;
  @Input() courseId!:number;
  @Input() hideDisplayRatings!:any;
  @Output() hide: EventEmitter<void> = new EventEmitter<void>();
  @Input() isVisible: boolean = false;
  @Input() ratingUrl:string="";


  constructor(private navigationService:NavigationService){

  }
  navigateToAddRatingToCourse(){
    this.navigationService.navigate(this.ratingUrl);
  }
  setDisplayRatings(){
    this.hide.emit()
  }

}
