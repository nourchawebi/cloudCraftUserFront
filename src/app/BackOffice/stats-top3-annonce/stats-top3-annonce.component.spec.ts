import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTop3AnnonceComponent } from './stats-top3-annonce.component';

describe('StatsTop3AnnonceComponent', () => {
  let component: StatsTop3AnnonceComponent;
  let fixture: ComponentFixture<StatsTop3AnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsTop3AnnonceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsTop3AnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
