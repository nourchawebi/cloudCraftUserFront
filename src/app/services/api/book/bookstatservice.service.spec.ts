import { TestBed } from '@angular/core/testing';

import { BookstatserviceService } from './bookstatservice.service';

describe('BookstatserviceService', () => {
  let service: BookstatserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookstatserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
