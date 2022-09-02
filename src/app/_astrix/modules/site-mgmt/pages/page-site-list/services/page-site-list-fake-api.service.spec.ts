import { TestBed } from '@angular/core/testing';

import { PageSiteListFakeApiService } from './page-site-list-fake-api.service';

describe('PageSiteListFakeApiService', () => {
  let service: PageSiteListFakeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageSiteListFakeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
