import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent {
  isCollapsed: boolean = true;
  @Input()
  title!: string ;

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    console.log(this.title);
  }
}
