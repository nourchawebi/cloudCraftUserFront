import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from 'src/app/FrontOffice/models/AnnonceMang/Annonce';
import { AnnonceService } from 'src/app/FrontOffice/services/Annonce/annonce.service';
import { CommentService } from 'src/app/FrontOffice/services/Comment/comment.service';
import { ReactService } from 'src/app/FrontOffice/services/React/react.service';

@Component({
  selector: 'app-get-target-annonce',
  templateUrl: './get-target-annonce.component.html',
  styleUrls: ['./get-target-annonce.component.css']
})
export class GetTargetAnnonceComponent implements OnInit {
  annonce!: Annonce;
  comments: Comment[] = [];
  id_user:number = 1;


  constructor(
    private annonceService: AnnonceService,
    private commentService: CommentService,
    private reactService:ReactService,
    private route: ActivatedRoute
  ) {}

  @Output() close = new EventEmitter<void>();
  @Input() id: any | undefined; // Assuming you have an @Input() id declared in your component

  ngOnInit(): void {
    this.getTargetAnnonce(this.id);
  }

  getTargetAnnonce(id: number): void {
    this.annonceService.getTargetAnnonce(id).subscribe(
      (response: Annonce) => {
        this.annonce = response;
        this.getAllComments(this.annonce.id_annonce);

      },
      (error) => {
        console.error('Error fetching annonce:', error);
      }
    );
  }



  getAllComments(annonceId: number): void {
    this.commentService.getAllComments(annonceId).subscribe(
      (response: Comment[]) => {
        this.comments = response;
      },
      (error) => {
        console.error('Error fetching comments:', error);
      }
    );
  }
  commentCount(): number {
    return this.comments.length;
  }




  onClose() {
    this.close.emit();
  }
}
