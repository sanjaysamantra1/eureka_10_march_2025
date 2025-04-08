import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment5Component } from './assignment5.component';

describe('Assignment5Component', () => {
  let component: Assignment5Component;
  let fixture: ComponentFixture<Assignment5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
