import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnversityComponent } from './unversity.component';

describe('UnversityComponent', () => {
  let component: UnversityComponent;
  let fixture: ComponentFixture<UnversityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnversityComponent]
    });
    fixture = TestBed.createComponent(UnversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
