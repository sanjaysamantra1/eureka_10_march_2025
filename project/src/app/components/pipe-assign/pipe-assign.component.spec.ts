import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeAssignComponent } from './pipe-assign.component';

describe('PipeAssignComponent', () => {
  let component: PipeAssignComponent;
  let fixture: ComponentFixture<PipeAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeAssignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
