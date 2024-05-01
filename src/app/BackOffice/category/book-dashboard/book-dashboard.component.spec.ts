import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDashboardComponent } from './book-dashboard.component';

describe('BookDashboardComponent', () => {
  let component: BookDashboardComponent;
  let fixture: ComponentFixture<BookDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
