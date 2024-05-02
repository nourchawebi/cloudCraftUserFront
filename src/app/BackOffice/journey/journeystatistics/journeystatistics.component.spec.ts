import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneystatisticsComponent } from './journeystatistics.component';

describe('JourneystatisticsComponent', () => {
  let component: JourneystatisticsComponent;
  let fixture: ComponentFixture<JourneystatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneystatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneystatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
