import { TestBed } from '@angular/core/testing';

import { USDAPlantApiService } from './usdaplant-api.service';

describe('USDAPlantApiService', () => {
  let service: USDAPlantApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(USDAPlantApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
