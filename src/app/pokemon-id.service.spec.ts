import { TestBed } from '@angular/core/testing';

import { PokemonIDService } from './pokemon-id.service';

describe('PokemonIDService', () => {
  let service: PokemonIDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonIDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
