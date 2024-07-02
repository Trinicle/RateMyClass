import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingButtonComponent } from './rating-button.component';

describe('RatingButtonComponent', () => {
  let component: RatingButtonComponent;
  let fixture: ComponentFixture<RatingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
