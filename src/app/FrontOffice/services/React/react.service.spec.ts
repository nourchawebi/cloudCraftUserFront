import { TestBed } from '@angular/core/testing';

import { ReactService } from './react.service';

describe('ReactService', () => {
  let service: ReactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
