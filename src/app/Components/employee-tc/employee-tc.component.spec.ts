import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTCComponent } from './employee-tc.component';

describe('EmployeeTCComponent', () => {
  let component: EmployeeTCComponent;
  let fixture: ComponentFixture<EmployeeTCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeTCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeTCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
