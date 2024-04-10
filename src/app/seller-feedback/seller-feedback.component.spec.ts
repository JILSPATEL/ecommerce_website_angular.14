import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerFeedbackComponent } from './seller-feedback.component';

describe('SellerFeedbackComponent', () => {
  let component: SellerFeedbackComponent;
  let fixture: ComponentFixture<SellerFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
