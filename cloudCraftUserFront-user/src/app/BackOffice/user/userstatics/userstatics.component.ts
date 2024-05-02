import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../FrontOffice/services/auth/authentication.service";
import {Router} from "@angular/router";
import {UserstatService} from "../../services/userstatservice/userstat.service";
import {ChartData, ChartDataSets, ChartType} from "chart.js";
import {Color} from "ng2-charts";

@Component({
  selector: 'app-userstatics',
  templateUrl: './userstatics.component.html',
  styleUrls: ['./userstatics.component.css'],

})
export class UserstaticsComponent implements OnInit {
  constructor(private userstat:UserstatService,
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
  public barChartLabelsUserByMonth:any[] = [];
  public barChartTypeUserByMonth: any = 'bar';
  public barChartLegendUserByMonth: boolean = true;
  public barChartDataUserByMonth: any[] = [];
  ngOnInit(): void {
    this.getUserByMonth();
    this. getUsersLockedByMonth();
    this. getSessionsPerDay();
    this.groupUsersByClass();
    this.nbrofusersthisyear();
    this.numberofdisabledusers();
    this.userslogedwithcard();
    }


  getUserByMonth() {
    this.userstat.getUsersByMonth().subscribe(data => {
      const labels: any[] = Object.keys(data);
        const values: any[] = Object.values(data);

        this.barChartLabelsUserByMonth = labels;

        this.barChartDataUserByMonth = [{ data: values, label: 'number of users by month' }];}


      );
  }
  public barChartLabelsUserlockedByMonth:any[] = [];
  public barChartTypeUserlockedByMonth: any = 'bar';
  public barChartLegendUserlockedByMonth: boolean = true;
  public barChartDataUserlockedByMonth: any[] = [];
  getUsersLockedByMonth() {
    this.userstat. getUsersLockedByMonth().subscribe(data => {
      const labels: string[] = Object.keys(data);
      const values: any[] = Object.values(data);

      this.barChartLabelsUserlockedByMonth = labels;

      this.barChartDataUserlockedByMonth = [{ data: values, label: 'User locked by month' }];}


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
  getSessionsPerDay() {
    this.userstat.countsessionsperday().subscribe((data) => {
      const days: any[] = Object.keys(data);
      const counts: number[] = Object.values(data);

      this.areaChartLabels = days;
      this.areaChartData = [{ data: counts, label: 'Session per day ', fill: false }];
    });
  }




  public pieChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'left', // Change the position of the legend (top, bottom, left, right)
    },
    tooltips: {

    },
  };
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
  groupUsersByClass() {
    this.userstat.countUserByClass().subscribe((data) => {
      const classes: string[] = Object.keys(data);
      const counts: number[] = Object.values(data);

      this.pieChartLabels = classes;
      this.pieChartData =   counts;

      ;
    });
  }
 nbrofuserthisyear :any;
  nbrofusersthisyear()
  {
    this.userstat.nbrofusersthisyear().subscribe(
      (data)=>
      {
        this.nbrofuserthisyear=data;
      }
    )
  }
  numberofdisableusers:any;
  numberofdisabledusers()
  {this.userstat.numberofdisabledusers().subscribe(
    (data)=>
    {
      this.numberofdisableusers=data;
    }
  )

  }
  numberofuserwithstudentcard:any;
  userslogedwithcard(){
    this.userstat.userslogedwithcard().subscribe(
      (data)=>
      {
        this.numberofuserwithstudentcard=data;
      }
    )


  }


}
