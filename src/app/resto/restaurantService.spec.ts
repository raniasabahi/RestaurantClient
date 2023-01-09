import { TestBed } from '@angular/core/testing';

import { restaurantService } from './restaurantService';

describe('restaurantService', () => {
  let service: restaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(restaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
