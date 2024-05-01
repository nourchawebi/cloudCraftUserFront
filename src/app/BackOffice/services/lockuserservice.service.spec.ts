import { TestBed } from '@angular/core/testing';

import { LockuserserviceService } from './lockuserservice.service';

describe('LockuserserviceService', () => {
  let service: LockuserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LockuserserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
