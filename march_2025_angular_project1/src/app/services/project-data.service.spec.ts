import { TestBed } from '@angular/core/testing';
import { FolderService } from './project-data.service';

//import { ProjectDataService } from './project-data.service';

describe('ProjectDataService', () => {
  let service: FolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
