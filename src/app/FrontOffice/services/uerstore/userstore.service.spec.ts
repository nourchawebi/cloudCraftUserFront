import { TestBed } from '@angular/core/testing';

import { UserstoreService } from './userstore.service';

describe('UserstoreService', () => {
  let service: UserstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
