import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChapterComponent } from './update-chapter.component';

describe('UpdateChapterComponent', () => {
  let component: UpdateChapterComponent;
  let fixture: ComponentFixture<UpdateChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateChapterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
