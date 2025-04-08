import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment03282025Component } from './assignment-03-28-2025.component';

describe('Assignment03282025Component', () => {
  let component: Assignment03282025Component;
  let fixture: ComponentFixture<Assignment03282025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment03282025Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment03282025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
