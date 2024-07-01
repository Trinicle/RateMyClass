import { TestBed } from '@angular/core/testing';

import { AddUniversityRatingService } from './add-university-rating.service';

describe('AddUniversityRatingService', () => {
  let service: AddUniversityRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddUniversityRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
