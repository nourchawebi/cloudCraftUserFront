import { TestBed } from '@angular/core/testing';

import { UserstatService } from './userstat.service';

describe('UserstatService', () => {
  let service: UserstatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserstatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
