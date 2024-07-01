import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUniversityRatingComponent } from './add-university-rating.component';

describe('AddUniversityRatingComponent', () => {
  let component: AddUniversityRatingComponent;
  let fixture: ComponentFixture<AddUniversityRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUniversityRatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUniversityRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
