import { TestBed } from '@angular/core/testing';

import { villeService } from './villeService';

describe('villeService', () => {
  let service: villeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(villeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
