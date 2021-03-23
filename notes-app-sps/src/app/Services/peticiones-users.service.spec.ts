import { TestBed } from '@angular/core/testing';

import { PeticionesUsersService } from './peticiones-users.service';

describe('PeticionesUsersService', () => {
  let service: PeticionesUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeticionesUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
