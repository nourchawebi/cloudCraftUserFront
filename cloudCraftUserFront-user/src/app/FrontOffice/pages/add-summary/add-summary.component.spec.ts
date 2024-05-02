import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSummaryComponent } from './add-summary.component';

describe('AddSummaryComponent', () => {
  let component: AddSummaryComponent;
  let fixture: ComponentFixture<AddSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
