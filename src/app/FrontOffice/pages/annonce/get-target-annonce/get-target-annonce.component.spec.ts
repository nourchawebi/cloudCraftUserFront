import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTargetAnnonceComponent } from './get-target-annonce.component';

describe('GetTargetAnnonceComponent', () => {
  let component: GetTargetAnnonceComponent;
  let fixture: ComponentFixture<GetTargetAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTargetAnnonceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTargetAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
