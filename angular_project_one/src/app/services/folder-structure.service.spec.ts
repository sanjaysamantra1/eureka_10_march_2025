import { TestBed } from '@angular/core/testing';

import { FolderStructureService } from './folder-structure.service';

describe('FolderStructureService', () => {
  let service: FolderStructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FolderStructureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
