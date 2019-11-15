import { TestBed } from '@angular/core/testing';

import { FirethingsService } from './firethings.service';

describe('FirethingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirethingsService = TestBed.get(FirethingsService);
    expect(service).toBeTruthy();
  });
});
