import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterimgComponent } from './registerimg.component';

describe('RegisterimgComponent', () => {
  let component: RegisterimgComponent;
  let fixture: ComponentFixture<RegisterimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterimgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
