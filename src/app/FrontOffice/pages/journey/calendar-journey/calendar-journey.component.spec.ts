import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarJourneyComponent } from './calendar-journey.component';

describe('CalendarJourneyComponent', () => {
  let component: CalendarJourneyComponent;
  let fixture: ComponentFixture<CalendarJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarJourneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
