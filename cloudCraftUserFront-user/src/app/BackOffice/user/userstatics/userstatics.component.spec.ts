import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstaticsComponent } from './userstatics.component';

describe('UserstaticsComponent', () => {
  let component: UserstaticsComponent;
  let fixture: ComponentFixture<UserstaticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserstaticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserstaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
