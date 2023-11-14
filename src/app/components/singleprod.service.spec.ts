import { TestBed } from '@angular/core/testing';

import { SingleprodService } from './singleprod.service';

describe('SingleprodService', () => {
  let service: SingleprodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleprodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
