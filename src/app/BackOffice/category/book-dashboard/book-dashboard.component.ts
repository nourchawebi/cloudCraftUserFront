import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ChartDataSets, ChartType} from "chart.js";
import {BookstatserviceService} from "../../../services/bookService/bookstatservice.service";

@Component({
  selector: 'app-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.css']
})
export class BookDashboardComponent implements OnInit{

  constructor(private bookStatService: BookstatserviceService,
              private router:Router, ) {
  }
  ngOnInit(): void {
    this.getAvailableVsUnavailable();
    this.groupBooksPerCategory();
    this.getBooksCreationByMonth();
    this.getNumberOfBooks()
    this.getNumberOfAvailableBooks();
    this.getNumberOfUnavailableBooks();
  }
  /**********************Available Vs Unavailable Chart******************************/
  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  public barChartColors: any[] = [
    { backgroundColor: 'rgb(25, 25, 112)' }, // Color for the first dataset
    { backgroundColor: 'rgba(0, 255, 0, 0.5)' }  // Color for the second dataset (if applicable)
  ];

  barChartLabel: string[] = [];
  barChartType: any = 'bar';
  barChartLegend: boolean = true;
  barChartData: any[] = [];
  getAvailableVsUnavailable(): void {
    this.bookStatService.getAvailableVsUnavailableBooks().subscribe(data => {
      const labels: string[] = Object.keys(data);
      const values: number[] = Object.values(data);
      this.barChartLabel = labels;
      this.barChartData = [{ data: values, label: 'Available Vs Unavailable Books' }];
    });
  }
  /**********************Books Per Category Chart******************************/
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
      backgroundColor: ['rgb(25, 25, 112)', 'rgb(255, 20, 147)', 'rgba(107, 142, 35)', 'rgba(0, 128, 0, 0.5)'
      , 'rgb(148, 0, 211)', 'rgb(178, 34, 34)', 'rgb(30, 144, 255)', 'rgb(255, 215, 0)', 'rgb(240, 128, 128)'
      , 'rgb(32, 178, 170)'],
    },
  ];
  public booksPerCategoryColor: any[] = [
    {
      backgroundColor: 'rgba(0, 0, 255, 0.5)',
    },
  ];
  public bookCountColor: any[] = [
    {
      backgroundColor: 'rgba(255, 0, 255, 0.5)', // Set the desired color
    },
  ];
  groupBooksPerCategory() {
    this.bookStatService.countBooksByCategory().subscribe((data) => {
      const classes: string[] = Object.keys(data);
      const counts: number[] = Object.values(data);

      this.pieChartLabels = classes;
      this.pieChartData =   counts;


    });
  }
  /**********************Books Per Month******************************/
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
  getBooksCreationByMonth() {
    this.bookStatService.countBooksCreationByMonth().subscribe((data) => {
      const days: any[] = Object.keys(data);
      const counts: number[] = Object.values(data);

      this.areaChartLabels = days;
      this.areaChartData = [{ data: counts, label: 'Books Creation per Month ', fill: false }];
    });
  }
  /**********************Total Books******************************/
  numberOfBooks:any;
  getNumberOfBooks()
  {this.bookStatService.countTotalBooks().subscribe(
    (data)=>
    {
      this.numberOfBooks=data;
    }
  )

  }
  /**********************Available Books******************************/
  numberOfAvailableBooks:any;
  getNumberOfAvailableBooks()
  {this.bookStatService.countAvailableBooks().subscribe(
    (data)=>
    {
      this.numberOfAvailableBooks=data;
    }
  )

  }
  /**********************Unavailable Books******************************/
  numberOfUnavailableBooks:any;
  getNumberOfUnavailableBooks()
  {this.bookStatService.countUnavailableBooks().subscribe(
    (data)=>
    {
      this.numberOfUnavailableBooks=data;
    }
  )

  }


}
