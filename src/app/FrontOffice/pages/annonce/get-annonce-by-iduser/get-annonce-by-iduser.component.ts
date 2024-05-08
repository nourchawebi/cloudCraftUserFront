import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from 'src/app/FrontOffice/models/AnnonceMang/Annonce';
import { AnnonceService } from 'src/app/FrontOffice/services/Annonce/annonce.service';

@Component({
  selector: 'app-get-annonce-by-iduser',
  templateUrl: './get-annonce-by-iduser.component.html',
  styleUrls: ['./get-annonce-by-iduser.component.css']
})
export class GetAnnonceByIDUserComponent {
  userId = 1;
  annonces: Annonce[] = [];
  annonce!:Annonce;
  id!:number;

  constructor(
    private route: ActivatedRoute,
    private annonceService: AnnonceService){ }
  ngOnInit(): void {

    this.annonceService.getAnnoncesByUser(this.userId).subscribe(data =>{
      console.log("liste des annonces")
      console.log(data)
      this.annonces= data
      console.log(this.annonce)
    });
  }
  getAnnoncesByUser(userId: number): void {
    console.log('hey');
    this.annonceService.getAnnoncesByUser(userId).subscribe(
      (response: Annonce[]) => {
        if (response && response.length > 0) {
          // If response is not null and not empty
          this.annonces = response;
        } else {
          console.log("No annonces found for user ID:", userId);
        }
      },

    );
  }



  getImageUrl(image: any): string {
    // Remplacez 'C:/xamp/htdocs/uploads/AnnonceImage' par votre chemin correct
    return `http://localhost:8081/image/${image}`;
  }

  deleteAnnonce(id: number): void {
    console.log("Deleting...");
    this.annonceService.deleteAnnonce(id).subscribe(
      () => {
        console.log('Announcement deleted successfully');
        this.getAnnoncesByUser(this.userId);
        // Supprimer l'annonce de la liste des annonces affichées
        //   this.annonces = this.annonces.filter(annonce => annonce.id_annonce !== id);
      },
      (error) => {
        console.error('Error deleting announcement:', error);
        // Gérer les erreurs si nécessaire
      }
    );
  }}




















