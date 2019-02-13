import { TestBed, inject } from '@angular/core/testing';

import { TituloService } from './titulo.service';

describe('TituloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TituloService]
    });
  });

  it('should be created', inject([TituloService], (service: TituloService) => {
    expect(service).toBeTruthy();
  }));
});
