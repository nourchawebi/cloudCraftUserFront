import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCountTypeAnnonceComponent } from './stats-count-type-annonce.component';

describe('StatsCountTypeAnnonceComponent', () => {
  let component: StatsCountTypeAnnonceComponent;
  let fixture: ComponentFixture<StatsCountTypeAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsCountTypeAnnonceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsCountTypeAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
