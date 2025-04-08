import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCRUDParentComponent } from './employee-crudparent.component';

describe('EmployeeCRUDParentComponent', () => {
  let component: EmployeeCRUDParentComponent;
  let fixture: ComponentFixture<EmployeeCRUDParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCRUDParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCRUDParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
