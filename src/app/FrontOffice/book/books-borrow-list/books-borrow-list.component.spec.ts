import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksBorrowListComponent } from './books-borrow-list.component';

describe('BooksBorrowListComponent', () => {
  let component: BooksBorrowListComponent;
  let fixture: ComponentFixture<BooksBorrowListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksBorrowListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksBorrowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
