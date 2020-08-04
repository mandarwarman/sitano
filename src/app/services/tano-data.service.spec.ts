import { TestBed } from '@angular/core/testing';

import { TanoDataService } from './tano-data.service';

describe('TanoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TanoDataService = TestBed.get(TanoDataService);
    expect(service).toBeTruthy();
  });
});
