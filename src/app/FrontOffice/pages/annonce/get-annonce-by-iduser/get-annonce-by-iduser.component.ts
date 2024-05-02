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

  constructor(
    private route: ActivatedRoute,
    private annonceService: AnnonceService){ }
    ngOnInit(): void {
      
      this.annonceService.getAnnoncesByUser(this.userId).subscribe(data =>{
        console.log("liste des annonces")
        console.log(data)
        this.annonces= data 
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

    getImageUrl(image: string): string {
      // Remplacez 'C:/xamp/htdocs/uploads/AnnonceImage' par votre chemin correct
      return `http://localhost/uploads/AnnonceImage/${image}`;
    }
    
    deleteAnnonce(id: number): void {
      console.log("mosh");
      this.annonceService.deleteAnnonce(id).subscribe(
        () => {
          console.log('Announcement deleted successfully');
          this.getAnnoncesByUser(this.userId);
        },
        (error) => {
          console.error('Error deleting announcement:', error);
          // Optionally, handle errors
        }
      );
    }
}
