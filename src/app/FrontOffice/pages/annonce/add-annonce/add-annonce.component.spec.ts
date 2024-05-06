import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnnonceComponent } from './add-annonce.component';

describe('AddAnnonceComponent', () => {
  let component: AddAnnonceComponent;
  let fixture: ComponentFixture<AddAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnnonceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
