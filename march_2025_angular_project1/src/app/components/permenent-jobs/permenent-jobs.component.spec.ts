import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermenentJobsComponent } from './permenent-jobs.component';

describe('PermenentJobsComponent', () => {
  let component: PermenentJobsComponent;
  let fixture: ComponentFixture<PermenentJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermenentJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermenentJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
