import { TestBed } from '@angular/core/testing';

import { EmployeehttpService } from './employeehttp.service';

describe('EmployeehttpService', () => {
  let service: EmployeehttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeehttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
