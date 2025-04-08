import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment8Component } from './assignment8.component';

describe('Assignment8Component', () => {
  let component: Assignment8Component;
  let fixture: ComponentFixture<Assignment8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
