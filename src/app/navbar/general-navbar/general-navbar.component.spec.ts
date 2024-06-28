import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralNavbarComponent } from './general-navbar.component';

describe('GeneralNavbarComponent', () => {
  let component: GeneralNavbarComponent;
  let fixture: ComponentFixture<GeneralNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [GeneralNavbarComponent]
});
    fixture = TestBed.createComponent(GeneralNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
