import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookDetailsComponent } from './my-book-details.component';

describe('MyBookDetailsComponent', () => {
  let component: MyBookDetailsComponent;
  let fixture: ComponentFixture<MyBookDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBookDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
