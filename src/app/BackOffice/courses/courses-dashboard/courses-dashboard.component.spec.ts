import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDashboardComponent } from './courses-dashboard.component';

describe('CoursesDashboardComponent', () => {
  let component: CoursesDashboardComponent;
  let fixture: ComponentFixture<CoursesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
