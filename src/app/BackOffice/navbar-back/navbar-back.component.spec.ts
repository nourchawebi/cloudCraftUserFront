import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBackComponent } from './navbar-back.component';

describe('NavbarBackComponent', () => {
  let component: NavbarBackComponent;
  let fixture: ComponentFixture<NavbarBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
