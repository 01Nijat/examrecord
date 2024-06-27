import { TestBed } from '@angular/core/testing';

import { SagirdService } from './sagird.service';

describe('SagirdService', () => {
  let service: SagirdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SagirdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
