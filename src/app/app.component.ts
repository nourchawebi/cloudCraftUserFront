import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courses-management';

  constructor(private router:Router){

  }


  navigateToCourses(){
      this.router.navigate(["/courses"])
  }
  navigateToAddCourses(){
    this.router.navigate(["/courses/add"])
}
}
