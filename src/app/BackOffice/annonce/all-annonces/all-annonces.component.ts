import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/FrontOffice/models/AnnonceMang/Annonce';
import { AnnonceService } from 'src/app/FrontOffice/services/Annonce/annonce.service';

@Component({
  selector: 'app-all-annonces',
  templateUrl: './all-annonces.component.html',
  styleUrls: ['./all-annonces.component.css']
})
export class AllAnnoncesComponent implements OnInit{
  annonces: Annonce[] = [];
  commentCount:number[]=[];
  constructor(private annonceService : AnnonceService){}


  ngOnInit(): void {
    this.loadAnnonces();

  }
    loadAnnonces(): void {
      this.annonceService.getAllAnnonces().subscribe(
        (annonces: Annonce[]) => {
          this.annonces = annonces
          this.loadLikesAndDislikes();
          
            //let  countcom = 0;
        this.commentCount = new Array(this.annonces.length).fill(0);

        // Count comments for each announcement
        this.annonces.forEach((annonce, index) => {
          this.commentCount[index] = annonce.comments.length;
        });
        
      },

      (error) => {
        console.error('Error retrieving products:', error);
   
      }
    );
  }

  getImageUrl(image: string): string {
    // Remplacez 'C:/xampp/htdocs/uploads/AnnonceImage' par votre chemin correct
    return `C:/xampp/htdocs/Upload/AnnonceImage/${image}`;
  }
 
  loadLikesAndDislikes(): void {
    // Check if this.annonce is defined and not null
    this.annonces.forEach(annonce => {
      annonce.likes = Number(localStorage.getItem(`post_${annonce.id_annonce}_likes`)) || 0;
      annonce.dislikes = Number(localStorage.getItem(`post_${annonce.id_annonce}_dislikes`)) || 0;
    });
  }



}
    



