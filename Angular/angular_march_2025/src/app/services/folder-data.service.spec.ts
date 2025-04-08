import { TestBed } from '@angular/core/testing';

import { FolderDataService } from './folder-data.service';

describe('FolderDataService', () => {
  let service: FolderDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FolderDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
