import { TestBed } from '@angular/core/testing';

import { ImtahanService } from './imtahan.service';

describe('ImtahanService', () => {
  let service: ImtahanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImtahanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
