import { TestBed } from '@angular/core/testing';

import { BStorageService } from './b-storage.service';

describe('BStorageService', () => {
  let service: BStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
