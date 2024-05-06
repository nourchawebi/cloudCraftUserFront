import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {RatingRepresentation} from "../../../services/api/models/rating-representation";
import {NavigationService} from "../../../services/navigation/navigation.service";
import { UserprofileService } from 'src/app/FrontOffice/services/userprofile/userprofile.service';
import { UserRepresentation } from 'src/app/services/api/models/user-representation';
import { ActivatedRoute, Router } from '@angular/router';
import { RatingsService } from 'src/app/services/api/ratings/ratings.service';

@Component({
  selector: 'app-show-ratings',
  templateUrl: './show-ratings.component.html',
  styleUrls: ['./show-ratings.component.css']
})
export class ShowRatingsComponent implements OnInit {
  @Input()
  ratings!:Array<RatingRepresentation>;
  @Input() courseId!:number;
  @Input() hideDisplayRatings!:any;
  @Output() hide: EventEmitter<void> = new EventEmitter<void>();
  @Output() idRating = new EventEmitter<number>();
  @Input() isVisible: boolean = false;
  @Input() ratingUrl:string="";
  connectedUser:UserRepresentation|null=null;
  chapterId=this.route.snapshot.params["chapterId"]||null;
  summaryId=this.route.snapshot.params["summaryId"]||null
  courseIdP=this.route.snapshot.params["courseId"]||null;


  constructor(private navigationService:NavigationService,private router: Router,private up:UserprofileService,private route:ActivatedRoute,private ratingService:RatingsService){

  }
  ngOnInit(): void {
    console.log(this.ratings)
    this.up.getConnectedUser().subscribe({
      next:user=>{
        this.connectedUser=user;
      },error:err=>{
        console.log(err);
      }
    })
  }
  navigateToSameUrl(): void {
    const currentUrl = this.router.url;
    this.router.navigateByUrl(currentUrl);
  }
  isActionAllowd(object:any):boolean{
    if(this?.connectedUser?.email==object.owner.email)return true;
    return false;
    
  }

  deleteRating(ratingId:number){
    let resourse;
    
    if(this.summaryId!==null)resourse="summary";
    else if(this.chapterId!==null)resourse="chapter";
    else resourse="course";
 
      console.log(resourse)

    if(resourse=="summary") this.deleteRatingFromSummary(this.summaryId,ratingId);
    else if(resourse=="chapter") this.deleteRatingFromChapter(this.chapterId,ratingId)


      else this.deleteRatingFromCourse(this.courseId,ratingId)
   
    this.idRating.emit(ratingId);
  }

  deleteRatingFromCourse(courseId:number,ratingId:number){

        this.ratingService.deleteRatingFromCourse(courseId,ratingId).subscribe({
          next:result=>console.log(result),
          error:err=>console.log(err)
        })
  }

  
  deleteRatingFromChapter(chapterId:number,ratingId:number){
    this.ratingService.deleteRatingFromChapter(chapterId,ratingId).subscribe({
      next:result=>console.log(result),
      error:err=>console.log(err)
    })
  }


  
  deleteRatingFromSummary(summaryid:number,ratingId:number){
    this.ratingService.deleteRatingFromSummary(summaryid,ratingId).subscribe({
      next:result=>console.log(result),
      error:err=>console.log(err)
    })
  }
  navigateToAddRatingToCourse(){
    this.navigationService.navigate(this.ratingUrl);
  }
  setDisplayRatings(){
    this.hide.emit()
  }

}
