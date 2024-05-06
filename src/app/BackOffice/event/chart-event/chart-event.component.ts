import { Component, OnInit  } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Label} from "ng2-charts";
import {EventService} from "../../../../../../eventFront/src/app/service/event/event.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-chart-event',
  templateUrl: './chart-event.component.html',
  styleUrls: ['./chart-event.component.css']
})
export class ChartEventComponent implements OnInit{

  constructor(private eventservice: EventService,
              private router: Router,) {
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
    this.eventservice.findMostEvents().subscribe(data => {

      const labels: any[] = Object.keys(data);
      const values: any[] = Object.values(data);

      console.log(data)
      this.barChartLabelsUsersByLocation = labels;

      this.barChartDataUsersByLocation = [{ data: values, label: 'events by month' }];}


    );
  }

  ngOnInit(): void {
    this.getUsersByLocation();
    this.alleventmonth();
this.alleventmonths();
  }





  public pieChartLabels: string[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartData: number[] = [];
  public pieChartColors: any[] = [
    {
      backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(255, 0, 255, 0.5)', 'rgba(255, 255, 0, 0.5)', 'rgba(0, 128, 0, 0.5)'],
    },
  ];
  public userLockedColor: any[] = [
    {
      backgroundColor: 'rgba(0, 0, 255, 0.5)',
    },
  ];
  public usercountColor: any[] = [
    {
      backgroundColor: 'rgba(255, 0, 255, 0.5)', // Set the desired color
    },
  ];
  alleventmonth() {
    this.eventservice.findMostEvents().subscribe((data) => {
      const classes: string[] = Object.keys(data);
      const counts: number[] = Object.values(data);

      this.pieChartLabels = classes;
      this.pieChartData =   counts;


    });
  }







  public pieChartpartLabels: string[] = [];
  public pieChartpartType: ChartType = 'pie';
  public pieChartpartLegend = true;
  public pieChartpartData: number[] = [];



  alleventmonths() {
    this.eventservice.findMostParticipatedEvent().subscribe((data) => {
      const classes: string[] = Object.keys(data);
      const counts: number[] = Object.values(data);

      this.pieChartpartLabels = classes;
      this.pieChartpartData = counts;
    });
  }













}

