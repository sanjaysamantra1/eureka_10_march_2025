import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAssignComponent } from './form-assign.component';

describe('FormAssignComponent', () => {
  let component: FormAssignComponent;
  let fixture: ComponentFixture<FormAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAssignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
