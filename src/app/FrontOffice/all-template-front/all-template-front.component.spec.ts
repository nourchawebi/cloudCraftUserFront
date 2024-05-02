import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTemplateFrontComponent } from './all-template-front.component';

describe('AllTemplateFrontComponent', () => {
  let component: AllTemplateFrontComponent;
  let fixture: ComponentFixture<AllTemplateFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTemplateFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTemplateFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
