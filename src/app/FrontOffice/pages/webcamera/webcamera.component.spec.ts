import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcameraComponent } from './webcamera.component';

describe('WebcameraComponent', () => {
  let component: WebcameraComponent;
  let fixture: ComponentFixture<WebcameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebcameraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebcameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
