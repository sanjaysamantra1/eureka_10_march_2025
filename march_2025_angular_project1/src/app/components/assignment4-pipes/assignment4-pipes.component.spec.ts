import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment4PipesComponent } from './assignment4-pipes.component';

describe('Assignment4PipesComponent', () => {
  let component: Assignment4PipesComponent;
  let fixture: ComponentFixture<Assignment4PipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment4PipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment4PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
