import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Chart } from 'chart.js'; 
import { Annonce } from 'src/app/FrontOffice/models/AnnonceMang/Annonce';
import { AnnonceService } from 'src/app/FrontOffice/services/Annonce/annonce.service';

@Component({
  selector: 'app-stats-top3-annonce',
  templateUrl: './stats-top3-annonce.component.html',
  styleUrls: ['./stats-top3-annonce.component.css']
})
export class StatsTop3AnnonceComponent implements AfterViewInit {
  top3Annonces$!: Observable<Annonce[]>;
  @ViewChild('barChart') barChart!: ElementRef<HTMLCanvasElement>;
  chartInstance: Chart | undefined;

  constructor(private annonceService: AnnonceService) { }

  ngAfterViewInit(): void {
    this.retrieveTop3Annonces();
  }

  retrieveTop3Annonces(): void {
    this.top3Annonces$ = this.annonceService.retrieveAnnonceByNbrLikes();
    this.top3Annonces$.subscribe((data) => {
      if (data) {
        setTimeout(() => {
          this.createBarChart(data);
        }, 100);
      }
    });
  }

  createBarChart(data: Annonce[]): void {
    if (!this.barChart || !this.barChart.nativeElement) {
      console.error('Canvas element not found.');
      return;
    }

    const ctx = this.barChart.nativeElement.getContext('2d') as CanvasRenderingContext2D;

    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    this.chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map((annonce) => annonce.title),
        datasets: [{
          label: 'likes number',
          data: data.map((annonce) => annonce.likes),
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: { // Définissez vos options de graphique ici
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 1
            }
          }]
        }
      }
    });
  }
}
