import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets, ChartType } from 'chart.js';
import { da } from 'date-fns/locale';
import { CoursesDashboardService } from 'src/app/services/api/courses-dashboard/courses-dashboard.service';
import { BookstatserviceService } from 'src/app/services/bookService/bookstatservice.service';

@Component({
  selector: 'app-courses-dashboard',
  templateUrl: './courses-dashboard.component.html',
  styleUrls: ['./courses-dashboard.component.css']
})
export class CoursesDashboardComponent {
  constructor(private bookStatService: BookstatserviceService,
    private router:Router,private coursesDashboredService:CoursesDashboardService ) {
}
ngOnInit(): void {
this.getCoursesByYear();
this.getRatingsByValue();
this.getCoursesByRating();
this.getNumberOfSummaries();
this.getNumberOfChapters();
this.getNumberOfCourses();
}
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


public pieChartOptions: any = {
responsive: true,
maintainAspectRatio: false,
legend: {
position: 'left', 
},
tooltips: {

},
};


//Pie 1
public RatingPerValueLabels: string[] = [];
public ratingPerValueValues: number[] = [];

//Pie 2
public coursesPerYearLabels: string[] = [];
public courseByUnivercityYear: number[] = [];




public pieChartType: ChartType = 'pie';
public pieChartLegend = true;

public pieChartColors: any[] = [
{
backgroundColor: ['rgb(25, 25, 112)', 'rgb(255, 20, 147)', 'rgba(107, 142, 35)', 'rgba(0, 128, 0, 0.5)'
, 'rgb(148, 0, 211)', 'rgb(178, 34, 34)', 'rgb(30, 144, 255)', 'rgb(255, 215, 0)', 'rgb(240, 128, 128)'
, 'rgb(32, 178, 170)'],
},
];
public categoryColor: any[] = [
{
backgroundColor: 'rgba(0, 0, 255, 0.5)',
},
];
public bookCountColor: any[] = [
{
backgroundColor: 'rgba(255, 0, 255, 0.5)', // Set the desired color
},
];
getCoursesByYear() {
this.coursesDashboredService.getCoursesByYear().subscribe({next:(data) => {
const courses: string[] = Object.keys(data);
const counts: number[] = Object.values(data);



this.coursesPerYearLabels = courses;
this.courseByUnivercityYear =   counts;


},error:(error)=>{
  console.log("RIGHT ERROR")
  console.log(error)
}});
}


getRatingsByValue() {
  this.coursesDashboredService.getRatingsByValue().subscribe({next:(data) => {
  const values: string[] = Object.keys(data);
  const counts: number[] = Object.values(data);
    console.log(values)
    console.log(counts)
  
  this.RatingPerValueLabels = values;
  this.ratingPerValueValues =   counts;
  
  
  },error:(error)=>{
    console.log("RIGHT ERROR")
    console.log(error)
  }});
  }

  getCoursesByRating() {
    this.coursesDashboredService.getCoursesByRating().subscribe({next:(data) => {
    const values: string[] = Object.keys(data);
    const counts: number[] = Object.values(data);



    this.areaChartLabels = values;
      this.areaChartData = [{ data: counts, label: 'Courses popularity', fill: false }];
    console.log(values);
    console.log(counts)

    
    },error:(error)=>{
      console.log("RIGHT ERROR")
      console.log(error)
    }});
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
this.areaChartData = [{ data: counts, label: 'Courses popularity', fill: false }];
});
}






numberOfSummaries:any;
getNumberOfSummaries()
{this.coursesDashboredService.countSummaries().subscribe(
(data)=>
{
  console.log("NUMBER OF SUMMARIES DATA IS : " + data)
this.numberOfSummaries=data;
}
)

}

numberOfChapters:any;
getNumberOfChapters()
{this.coursesDashboredService.countChapters().subscribe(
(data)=>
{
this.numberOfChapters=data;
}
)

}
numberOfCourses:any;
getNumberOfCourses()
{this.coursesDashboredService.countCourses().subscribe(
(data)=>
{
this.numberOfCourses=data;
}
)

}
}
