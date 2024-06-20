import { TestBed } from '@angular/core/testing';

import { UniversitySearchService } from './university-search.service';

describe('UniversitySearchService', () => {
  let service: UniversitySearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversitySearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
