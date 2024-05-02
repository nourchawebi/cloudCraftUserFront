import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRatingsComponent } from './show-ratings.component';

describe('ShowRatingsComponent', () => {
  let component: ShowRatingsComponent;
  let fixture: ComponentFixture<ShowRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRatingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
