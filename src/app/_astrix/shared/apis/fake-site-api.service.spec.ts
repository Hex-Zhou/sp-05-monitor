import { TestBed } from '@angular/core/testing';

import { FakeSiteApiService } from './fake-site-api.service';

describe('FakeSiteApiService', () => {
  let service: FakeSiteApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeSiteApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
