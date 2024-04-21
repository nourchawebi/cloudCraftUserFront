import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBackComponent } from './footer-back.component';

describe('FooterBackComponent', () => {
  let component: FooterBackComponent;
  let fixture: ComponentFixture<FooterBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
