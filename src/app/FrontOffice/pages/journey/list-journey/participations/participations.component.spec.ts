import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationsComponent } from './participations.component';

describe('ParticipationsComponent', () => {
  let component: ParticipationsComponent;
  let fixture: ComponentFixture<ParticipationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
