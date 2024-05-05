import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBooksListComponent } from './user-books-list.component';

describe('UserBooksListComponent', () => {
  let component: UserBooksListComponent;
  let fixture: ComponentFixture<UserBooksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBooksListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
