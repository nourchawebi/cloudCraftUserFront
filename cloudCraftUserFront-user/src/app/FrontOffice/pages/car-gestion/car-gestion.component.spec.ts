import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarGestionComponent } from './car-gestion.component';

describe('CarGestionComponent', () => {
  let component: CarGestionComponent;
  let fixture: ComponentFixture<CarGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarGestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
