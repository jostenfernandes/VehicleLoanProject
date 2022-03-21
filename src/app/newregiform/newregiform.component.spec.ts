import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewregiformComponent } from './newregiform.component';

describe('NewregiformComponent', () => {
  let component: NewregiformComponent;
  let fixture: ComponentFixture<NewregiformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewregiformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewregiformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
