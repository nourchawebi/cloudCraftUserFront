import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyDetailsComponent } from './journey-details.component';

describe('JourneyDetailsComponent', () => {
  let component: JourneyDetailsComponent;
  let fixture: ComponentFixture<JourneyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
