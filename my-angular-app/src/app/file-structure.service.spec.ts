import { TestBed } from '@angular/core/testing';

import { FileStructureService } from './file-structure.service';

describe('FileStructureService', () => {
  let service: FileStructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileStructureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
