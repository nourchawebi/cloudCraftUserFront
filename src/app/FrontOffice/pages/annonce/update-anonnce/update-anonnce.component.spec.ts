import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnonnceComponent } from './update-anonnce.component';

describe('UpdateAnonnceComponent', () => {
  let component: UpdateAnonnceComponent;
  let fixture: ComponentFixture<UpdateAnonnceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAnonnceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAnonnceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
