import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/FrontOffice/models/AnnonceMang/Annonce';
import { AnnonceService } from 'src/app/FrontOffice/services/Annonce/annonce.service';

@Component({
  selector: 'app-find-annonce-by-date',
  templateUrl: './find-annonce-by-date.component.html',
  styleUrls: ['./find-annonce-by-date.component.css']
})
export class FindAnnonceByDateComponent implements OnInit {
  annoncesByDate: Annonce[] = [];
  selectedDate!: string; // Garder le type de selectedDate en string

  constructor(private annonceService: AnnonceService) { }

  ngOnInit(): void {
    this.selectedDate = this.getCurrentDate(); // Initialise selectedDate avec la date actuelle
  }

  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2); // +1 car janvier est 0
    const day = ('0' + today.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  searchAnnonceByDate(): void {
    this.annonceService.retrieveAnnonceByDate(this.selectedDate)
      .subscribe((data: Annonce[]) => {
        this.annoncesByDate = data;
      });
  }
}
