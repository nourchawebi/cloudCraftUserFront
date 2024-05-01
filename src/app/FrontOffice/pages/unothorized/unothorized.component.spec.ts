import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnothorizedComponent } from './unothorized.component';

describe('UnothorizedComponent', () => {
  let component: UnothorizedComponent;
  let fixture: ComponentFixture<UnothorizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnothorizedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnothorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
