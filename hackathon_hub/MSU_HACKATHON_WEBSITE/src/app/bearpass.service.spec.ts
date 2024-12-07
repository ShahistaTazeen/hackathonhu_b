import { TestBed } from '@angular/core/testing';

import { BearpassService } from './bearpass.service';

describe('BearpassService', () => {
  let service: BearpassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BearpassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
