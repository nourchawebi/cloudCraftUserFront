import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAnnonceByIDUserComponent } from './get-annonce-by-iduser.component';

describe('GetAnnonceByIDUserComponent', () => {
  let component: GetAnnonceByIDUserComponent;
  let fixture: ComponentFixture<GetAnnonceByIDUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAnnonceByIDUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAnnonceByIDUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
