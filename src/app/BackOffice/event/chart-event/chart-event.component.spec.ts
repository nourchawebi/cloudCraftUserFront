import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartEventComponent } from './chart-event.component';

describe('ChartEventComponent', () => {
  let component: ChartEventComponent;
  let fixture: ComponentFixture<ChartEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
