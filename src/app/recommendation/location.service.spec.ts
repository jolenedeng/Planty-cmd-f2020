import { TestBed } from '@angular/core/testing';

import { LocationService } from './location.service';
import {HttpClientModule} from '@angular/common/http';

describe('LocationServiceService', () => {
  let service: LocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(LocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
