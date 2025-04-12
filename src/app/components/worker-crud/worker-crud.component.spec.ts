import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerCrudComponent } from './worker-crud.component';

describe('WorkerCrudComponent', () => {
  let component: WorkerCrudComponent;
  let fixture: ComponentFixture<WorkerCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkerCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
