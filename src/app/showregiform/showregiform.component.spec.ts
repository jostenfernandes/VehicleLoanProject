import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowregiformComponent } from './showregiform.component';

describe('ShowregiformComponent', () => {
  let component: ShowregiformComponent;
  let fixture: ComponentFixture<ShowregiformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowregiformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowregiformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
