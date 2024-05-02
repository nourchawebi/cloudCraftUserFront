import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSummaryComponent } from './update-summary.component';

describe('UpdateSummaryComponent', () => {
  let component: UpdateSummaryComponent;
  let fixture: ComponentFixture<UpdateSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
