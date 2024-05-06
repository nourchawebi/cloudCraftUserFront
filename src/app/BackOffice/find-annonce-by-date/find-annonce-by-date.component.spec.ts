import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAnnonceByDateComponent } from './find-annonce-by-date.component';

describe('FindAnnonceByDateComponent', () => {
  let component: FindAnnonceByDateComponent;
  let fixture: ComponentFixture<FindAnnonceByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAnnonceByDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindAnnonceByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
