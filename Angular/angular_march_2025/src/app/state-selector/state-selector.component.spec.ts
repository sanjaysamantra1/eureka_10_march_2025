import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateSelectorComponent } from './state-selector.component';

describe('StateSelectorComponent', () => {
  let component: StateSelectorComponent;
  let fixture: ComponentFixture<StateSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
