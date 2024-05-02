import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LocationService} from "../../../FrontOffice/services/location.service";
import {JourneyService} from "../../../FrontOffice/services/journey.service";
import {Color} from "ng2-charts";
import {ChartDataSets, ChartType} from "chart.js";

@Component({
  selector: 'app-journeystatistics',
  templateUrl: './journeystatistics.component.html',
  styleUrls: ['./journeystatistics.component.css']
})
export class JourneystatisticsComponent implements OnInit{

  constructor(private locationService:LocationService,
              private journeyService:JourneyService,
              private router:Router, ) {
  }

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,

        }
      }]
    }
  };
  public barChartLabelsJourneyByMonth:any[] = [];
  public barChartLabelsUsersByLocation: any = 'bar';
  public barChartLegendJourneyByMonth: boolean = true;
  public barChartDataUsersByLocation: any[] = [];
  public JourneycountColor: any[] = [
    {
      backgroundColor: 'rgba(255, 0, 255, 0.5)', // Set the desired color
    },
  ];

  getUsersByLocation() {
    this.locationService.getStats().subscribe(data => {

      const labels: any[] = Object.keys(data);
      const values: any[] = Object.values(data);

      console.log(data)
      this.barChartLabelsUsersByLocation = labels;

      this.barChartDataUsersByLocation = [{ data: values, label: 'number of passengers by location' }];}


    );
  }


  public areaChartColors: Color[] = [
    {
      borderColor: 'blue', // Set the border color of the line chart
      backgroundColor: 'rgba(0, 0, 255, 0.1)', // Set the background color of the line chart area
    }
  ]

  public areaChartOptions:
    any = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  public areaChartLabels: string[] = [];
  public areaChartType: ChartType = 'line';
  public areaChartLegend = true;
  public areaChartData: ChartDataSets[] = [];

  getJourneyByDay() {
    this.journeyService.getStats().subscribe(data => {
      const days: any[] = Object.keys(data);
      const counts: number[] = Object.values(data);

      this.areaChartLabels = days;
      this.areaChartData = [{ data: counts, label: 'Journey per day ', fill: false }];
    });
  }

  nbrofjourneythisyear :any = 0;
  getnbrofjourneythisyear()
  {
    this.journeyService.getStats().subscribe(
      (data)=>
      {
        const counts: number[] = Object.values(data);
        for (let v of counts)
        this.nbrofjourneythisyear += v
      }
    )
  }

  ngOnInit(): void {
    this.getUsersByLocation()
    this.getJourneyByDay()
    this.getnbrofjourneythisyear()
  }
}
