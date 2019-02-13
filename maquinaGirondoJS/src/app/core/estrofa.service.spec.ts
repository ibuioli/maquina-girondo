import { TestBed, inject } from '@angular/core/testing';

import { EstrofaService } from './estrofa.service';

describe('EstrofaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstrofaService]
    });
  });

  it('should be created', inject([EstrofaService], (service: EstrofaService) => {
    expect(service).toBeTruthy();
  }));
});
