import { TestBed } from '@angular/core/testing';

import { HttpsClientService } from './https-client.service';

describe('HttpsClientService', () => {
  let service: HttpsClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpsClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
