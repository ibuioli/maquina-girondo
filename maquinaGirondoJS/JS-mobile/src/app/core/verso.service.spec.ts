import { TestBed, inject } from '@angular/core/testing';

import { VersoService } from './verso.service';

describe('VersosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VersoService]
    });
  });

  it('should be created', inject([VersoService], (service: VersoService) => {
    expect(service).toBeTruthy();
  }));
});
