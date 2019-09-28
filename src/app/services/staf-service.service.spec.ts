import { TestBed } from '@angular/core/testing';

import { StafServiceService } from './staf-service.service';

describe('StafServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StafServiceService = TestBed.get(StafServiceService);
    expect(service).toBeTruthy();
  });
});
