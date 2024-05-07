import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnnonceService } from 'src/app/FrontOffice/services/Annonce/annonce.service';

@Component({
  selector: 'app-update-anonnce',
  templateUrl: './update-anonnce.component.html',
  styleUrls: ['./update-anonnce.component.css']
})
export class UpdateAnonnceComponent implements OnInit {
  constructor(private service: AnnonceService, private router: Router, private activatedRoute: ActivatedRoute) {}

  annonce: any;
  id: any;
  isModalOpen: boolean = true; // Variable de contrôle pour ouvrir/fermer la modal


  routeSub!: Subscription;

  ngOnInit(): void {
    this.annonce = {
      id_annonce: null,
      title: null,
      annonce_description: null,
      picture: null,
      annonce_date: null,
      startDate: null,
      typeAnnonce: null,
      typeInternship: null,
      likes: null,
      dislikes: null,
      governorate: null,
      user: null, // Replace 'any' with your User model
      comments: [], // Replace 'any' with your Comment model
      reacts: [] // Replace 'any' with your React model
    };

    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    this.service.getAnnonceById(this.id).subscribe(p => {
      console.log(p);
      this.annonce = p;
    });
  }

  updateAnnonce(): void {
    const updatedAnnonce = {
      ...this.annonce,
      title: this.annonce.title,
      annonce_description: this.annonce.annonce_description
    };

    this.service.updateAnnonceee(this.annonce).subscribe(updated => {
      console.log('Annonce mise à jour : ', updated);
      // Rediriger vers une autre page après la mise à jour
      this.router.navigate(['home/get-annonceUser/1']);
    });
  }
  closeModal(): void {
    this.isModalOpen = false; // Ferme la modal
  }
}
