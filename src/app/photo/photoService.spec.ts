import { TestBed } from '@angular/core/testing';

import { photoService } from './photoService';

describe('photoService', () => {
  let service: photoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(photoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
