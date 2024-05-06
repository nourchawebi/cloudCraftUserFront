import { TestBed } from '@angular/core/testing';

import { CoursesDashboardService } from './courses-dashboard.service';

describe('CoursesDashboardService', () => {
  let service: CoursesDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
