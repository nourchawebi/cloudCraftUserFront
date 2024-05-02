import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAnnonceComponent } from './get-annonce.component';

describe('GetAnnonceComponent', () => {
  let component: GetAnnonceComponent;
  let fixture: ComponentFixture<GetAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAnnonceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
