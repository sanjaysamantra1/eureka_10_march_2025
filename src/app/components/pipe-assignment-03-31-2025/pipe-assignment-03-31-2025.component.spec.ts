import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeAssignment03312025Component } from './pipe-assignment-03-31-2025.component';

describe('PipeAssignment03312025Component', () => {
  let component: PipeAssignment03312025Component;
  let fixture: ComponentFixture<PipeAssignment03312025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeAssignment03312025Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeAssignment03312025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
