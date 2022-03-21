import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyLoanPageComponent } from './apply-loan-page.component';

describe('ApplyLoanPageComponent', () => {
  let component: ApplyLoanPageComponent;
  let fixture: ComponentFixture<ApplyLoanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyLoanPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyLoanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
