import { TestBed, inject } from '@angular/core/testing';

import { GeolocService } from './geoloc.service';

describe('GeolocService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeolocService]
    });
  });

  it('should be created', inject([GeolocService], (service: GeolocService) => {
    expect(service).toBeTruthy();
  }));
});
