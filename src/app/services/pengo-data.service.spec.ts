import { TestBed } from '@angular/core/testing';

import { PengoDataService } from './pengo-data.service';

describe('PengoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PengoDataService = TestBed.get(PengoDataService);
    expect(service).toBeTruthy();
  });
});
