import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEventComponent } from './ajouter-event.component';

describe('AjouterEventComponent', () => {
  let component: AjouterEventComponent;
  let fixture: ComponentFixture<AjouterEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
