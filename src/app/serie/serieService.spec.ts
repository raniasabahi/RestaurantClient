import { TestBed } from '@angular/core/testing';

import { serieService } from './serieService';

describe('serieService', () => {
  let service: serieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(serieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
