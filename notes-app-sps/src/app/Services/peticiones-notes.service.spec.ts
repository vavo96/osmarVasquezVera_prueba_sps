import { TestBed } from '@angular/core/testing';

import { PeticionesNotesService } from './peticiones-notes.service';

describe('PeticionesNotesService', () => {
  let service: PeticionesNotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeticionesNotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
