import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Chart } from 'chart.js'; 
import { AnnonceService } from 'src/app/FrontOffice/services/Annonce/annonce.service';

@Component({
  selector: 'app-stats-count-type-annonce',
  templateUrl: './stats-count-type-annonce.component.html',
  styleUrls: ['./stats-count-type-annonce.component.css']
})
export class StatsCountTypeAnnonceComponent implements OnInit {
  pourcentages$!: Observable<Map<string, number>>;
  @ViewChild('pieChart') pieChart!: ElementRef<HTMLCanvasElement>;
  chartInstance: Chart | undefined;

  constructor(private annonceService: AnnonceService) {}

  ngOnInit(): void {
    this.pourcentages$ = this.annonceService.retrieveAnnonceByType();
    this.pourcentages$.subscribe(
      (data) => {
        this.createPieChart(data);
      },
      (error) => {
        console.error('Erreur lors de la récupération des pourcentages : ', error);
      }
    );
  }

  createPieChart(pourcentages: Map<string, number>): void {
    const ctx = this.pieChart.nativeElement.getContext('2d') as CanvasRenderingContext2D;
    if (!ctx) {
      console.error('Canvas element not found.');
      return;
    }

    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    this.chartInstance = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: Object.keys(pourcentages),
        datasets: [
          {
            label: 'Static',
            data: Object.values(pourcentages),
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}
