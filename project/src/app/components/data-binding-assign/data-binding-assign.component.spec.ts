import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingAssignComponent } from './data-binding-assign.component';

describe('DataBindingAssignComponent', () => {
  let component: DataBindingAssignComponent;
  let fixture: ComponentFixture<DataBindingAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBindingAssignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
