import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecrudParentComponent } from './employeecrud-parent.component';

describe('EmployeecrudParentComponent', () => {
  let component: EmployeecrudParentComponent;
  let fixture: ComponentFixture<EmployeecrudParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeecrudParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeecrudParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
