import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentMarch28Component } from './assignment-march28.component';


describe('AssignmentMarch28Component', () => {
  let component: AssignmentMarch28Component;
  let fixture: ComponentFixture<AssignmentMarch28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentMarch28Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentMarch28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
