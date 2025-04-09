import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment31Component } from './assignment-31.component';

describe('Assignment31Component', () => {
  let component: Assignment31Component;
  let fixture: ComponentFixture<Assignment31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment31Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
