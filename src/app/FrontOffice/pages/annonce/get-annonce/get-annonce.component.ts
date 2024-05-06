import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Annonce, TypeAnnonce } from 'src/app/FrontOffice/models/AnnonceMang/Annonce';
import { AnnonceService } from 'src/app/FrontOffice/services/Annonce/annonce.service';
import { CommentService } from 'src/app/FrontOffice/services/Comment/comment.service';
import { ReactService } from 'src/app/FrontOffice/services/React/react.service';


@Component({
  selector: 'app-get-annonce',
  templateUrl: './get-annonce.component.html',
  styleUrls: ['./get-annonce.component.css']
})
export class GetAnnonceComponent implements OnInit {

  selectedAnnouncementId!: number ;

  ShowAnnonceModal:boolean=false;
  countcom:number=0;
  commentCount:number[]=[];
  annonces: Annonce[] = [];
  comments: any[] = [];
  filteredAnnonces: Annonce[] = [];
  searchTerm: string = '';
  ShowAddAnnonceModal: boolean=false;
  ShowCommentModal: boolean=false;
  id!:number;
  selectedTypes: string[] = [];
  title!: string;
  typeAnnonceOptions:string[]=Object.values(TypeAnnonce);
  totalItems!: number;
  pageSize = 6; // Nombre d'éléments par page
  currentPage = 1; // Page actuelle
  totalPages!: number;
  pages: number[] = [];
  pagedAnnonces: Annonce[] = [];
  likes: number = 0;
  dislikes: number = 0;
  id_user:number = 1;
  //likedStatus: { [annonceId: number]: boolean } = {};


  constructor(private annonceService : AnnonceService,
              private router:Router,
              private reactService:ReactService,
            private commentService:CommentService) {} 
   
  ngOnInit(): void {
    this.loadAnnonces();
  
  }
  loadAnnonces(): void {
    this.annonceService.getAllAnnonces().subscribe(
      (annonces: Annonce[]) => {
        this.annonces = annonces;
        this.totalItems = this.annonces.length;
        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
        this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
        this.updatePagedAnnonces();
        this.loadLikesAndDislikes();
        //let  countcom = 0;
        this.commentCount = new Array(this.annonces.length).fill(0);

      // Count comments for each announcement
      this.annonces.forEach((annonce, index) => {
        this.commentCount[index] = annonce.comments.length;
      });

        console.log(annonces);
        
        // Vérification des réactions utilisateur pour chaque annonce chargée
        /*this.annonces.forEach(annonce => {
          this.verifyUserReaction(annonce);
        });*/
      },
      (error) => {
        console.error('Error retrieving products:', error);
      }
    );
    //console.log(this.likedStatus);
  }
  


  getImageUrl(image: any): string {
    // Remplacez 'C:/xamp/htdocs/uploads/AnnonceImage' par votre chemin correct
    return `http://localhost:8081/image/${image}`;
  }

toggleTypeAnnonceSelection(type: string) {
  if (this.isSelected(type)) {
    this.selectedTypes = this.selectedTypes.filter(t => t !== type);
  } else {
    this.selectedTypes.push(type);
  }
}

isSelected(type: string): boolean {
  return this.selectedTypes.includes(type);
}


search(): void {
  if (!this.searchTerm.trim()) {
    // If search term is empty, show all annonces
    this.filteredAnnonces = [...this.annonces];
  } else {
    // Filter annonces based on search term
    this.filteredAnnonces = this.annonces.filter(annonce =>
      annonce.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

ViewMore(annonceId: number){
  this.ShowAnnonceModal=true;
  this.id=annonceId;
  //console.log(this.id);

}

openAddAnnonceModal(){
  this.ShowAddAnnonceModal=true;
}

closeAnnonceModal(){
  this.ShowAnnonceModal=false;
}
closeAddAnnonceModal(){
  this.ShowAddAnnonceModal=false;
}
openAddCommentModal(annonceId: number){
  this.ShowCommentModal=true;
  this.id=annonceId;
}
closeCommentModal(){
  this.ShowCommentModal=false;
}

filterAnnonces() {
  this.annonceService.filterAnnonces(this.selectedTypes)
    .subscribe((annonces) => {
      this.annonces = annonces;
    });
}
setReact(id_annonce:number){
  console.log('ssssssssssssssssssssssssss',id_annonce)
  
}
searchAnnonces() {
  if (this.title.trim() !== '') {
    this.annonceService.searchProduct(this.title)
      .subscribe((annonces) => {
        this.annonces = annonces;
      });
  } 
}

getCurrentPageAnnonces(): Annonce[] {
  const startIndex = (this.currentPage - 1) * this.pageSize;
  const endIndex = startIndex + this.pageSize;
  return this.annonces.slice(startIndex, endIndex);
}

previousPage(): void {
  if (this.currentPage > 1) {
    this.currentPage--;
    this.updatePagedAnnonces();
  }
}

nextPage(): void {
  const totalPages = Math.ceil(this.totalItems / this.pageSize);
  if (this.currentPage < totalPages) {
    this.currentPage++;
    this.updatePagedAnnonces();
  }
}

updatePagedAnnonces() {
  const startIndex = (this.currentPage - 1) * this.pageSize;
  this.pagedAnnonces = this.annonces.slice(startIndex, startIndex + this.pageSize);
}

onPageChange(page: number) {
  if (page >= 1 && page <= this.totalPages) {
    this.currentPage = page;
    this.updatePagedAnnonces();
  }
}
//// like and dislike
likePost(annonce:Annonce): void {
  this.reactService.likePost(annonce.id_annonce,this.id_user).subscribe(
    response => {
      console.log('Post liked successfully', response);
      annonce.likes ++; // Incrémente le compteur de like de la publication
   // Met à jour le stockage local avec le nouveau nombre de dislikes
   localStorage.setItem(`post_${annonce.id_annonce}_likes`, annonce.likes.toString()); // Mettre à jour le stockage local
   },
    error => {
      console.error('Error liking post', error);
    }
  );
}

dislikePost(annonce:Annonce): void {
  this.reactService.dislikePost(annonce.id_annonce,this.id_user).subscribe(
    response => {
      console.log('Post disliked successfully', response);
      annonce.dislikes ++; // Incrémente le compteur de like de la publication
   // Met à jour le stockage local avec le nouveau nombre de dislikes
   localStorage.setItem(`post_${annonce.id_annonce}_dislikes`, annonce.dislikes.toString()); // Mettre à jour le stockage local
   },
    error => {
      console.error('Error disliking post', error);
    }
  );
}
loadLikesAndDislikes(): void {
  // Check if this.annonce is defined and not null
  this.annonces.forEach(annonce => {
    annonce.likes = Number(localStorage.getItem(`post_${annonce.id_annonce}_likes`)) || 0;
    annonce.dislikes = Number(localStorage.getItem(`post_${annonce.id_annonce}_dislikes`)) || 0;
  });


}
isLiked!:Boolean;
verifyUserReaction(annonce: Annonce): void {
  this.reactService.verifyUserReaction(this.id_user, annonce.id_annonce).subscribe(
    (result: boolean) => {
      // Mettre à jour le statut de l'icône "like" en fonction de la réponse
      this.isLiked=result;
    },
    (error) => {
      console.error('Error verifying user reaction:', error);
    }
  );
  console.log(this.isLiked);
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

}
