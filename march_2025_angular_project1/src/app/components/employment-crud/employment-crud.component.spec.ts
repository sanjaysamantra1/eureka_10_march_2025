import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentCRUDComponent } from './employment-crud.component';

describe('EmploymentCRUDComponent', () => {
  let component: EmploymentCRUDComponent;
  let fixture: ComponentFixture<EmploymentCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploymentCRUDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploymentCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
