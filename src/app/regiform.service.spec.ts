import { TestBed } from '@angular/core/testing';

import { RegiformService } from './regiform.service';

describe('RegiformService', () => {
  let service: RegiformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegiformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
