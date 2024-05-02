import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJourneyComponent } from './list-journey.component';

describe('ListJourneyComponent', () => {
  let component: ListJourneyComponent;
  let fixture: ComponentFixture<ListJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListJourneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
