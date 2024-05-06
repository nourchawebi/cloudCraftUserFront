import { TestBed } from '@angular/core/testing';

import { AnnonceStaticsService } from './annonce-statics.service';

describe('AnnonceStaticsService', () => {
  let service: AnnonceStaticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnonceStaticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
