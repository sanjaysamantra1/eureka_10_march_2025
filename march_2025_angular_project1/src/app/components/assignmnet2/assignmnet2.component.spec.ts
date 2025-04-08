import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignmnet2Component } from './assignmnet2.component';

describe('Assignmnet2Component', () => {
  let component: Assignmnet2Component;
  let fixture: ComponentFixture<Assignmnet2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignmnet2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignmnet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
