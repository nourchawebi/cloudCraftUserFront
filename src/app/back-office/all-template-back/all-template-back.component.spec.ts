import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTemplateBackComponent } from './all-template-back.component';

describe('AllTemplateBackComponent', () => {
  let component: AllTemplateBackComponent;
  let fixture: ComponentFixture<AllTemplateBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTemplateBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTemplateBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
