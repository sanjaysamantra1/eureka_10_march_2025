import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment7Component } from './assignment7.component';

describe('Assignment7Component', () => {
  let component: Assignment7Component;
  let fixture: ComponentFixture<Assignment7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
