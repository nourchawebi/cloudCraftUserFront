import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterDetailsComponent } from './chapter-details.component';

describe('ChapterDetailsComponent', () => {
  let component: ChapterDetailsComponent;
  let fixture: ComponentFixture<ChapterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
