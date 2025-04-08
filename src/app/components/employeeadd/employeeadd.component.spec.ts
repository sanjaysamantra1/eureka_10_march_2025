import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeaddComponent } from './employeeadd.component';

describe('EmployeeaddComponent', () => {
  let component: EmployeeaddComponent;
  let fixture: ComponentFixture<EmployeeaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeaddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
