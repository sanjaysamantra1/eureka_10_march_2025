import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewDeleteComponent } from './employee-view-delete.component';

describe('EmployeeViewDeleteComponent', () => {
  let component: EmployeeViewDeleteComponent;
  let fixture: ComponentFixture<EmployeeViewDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeViewDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeViewDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
