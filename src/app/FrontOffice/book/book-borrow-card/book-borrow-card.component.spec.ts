import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBorrowCardComponent } from './book-borrow-card.component';

describe('BookBorrowCardComponent', () => {
  let component: BookBorrowCardComponent;
  let fixture: ComponentFixture<BookBorrowCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookBorrowCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookBorrowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
