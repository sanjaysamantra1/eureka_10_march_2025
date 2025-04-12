import { TestBed } from '@angular/core/testing';

import { EmployeesCrudService } from './employees-crud.service';

describe('EmployeesCrudService', () => {
  let service: EmployeesCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
