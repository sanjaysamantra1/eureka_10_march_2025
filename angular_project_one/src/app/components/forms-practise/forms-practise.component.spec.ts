import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsPractiseComponent } from './forms-practise.component';

describe('FormsPractiseComponent', () => {
  let component: FormsPractiseComponent;
  let fixture: ComponentFixture<FormsPractiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsPractiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsPractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
