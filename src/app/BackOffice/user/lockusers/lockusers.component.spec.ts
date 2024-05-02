import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockusersComponent } from './lockusers.component';

describe('LockusersComponent', () => {
  let component: LockusersComponent;
  let fixture: ComponentFixture<LockusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LockusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
