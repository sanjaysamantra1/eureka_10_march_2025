import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeService1Component } from './employee-service1.component';

describe('EmployeeService1Component', () => {
  let component: EmployeeService1Component;
  let fixture: ComponentFixture<EmployeeService1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeService1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeService1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
