import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTableAssignComponent } from './card-table-assign.component';

describe('CardTableAssignComponent', () => {
  let component: CardTableAssignComponent;
  let fixture: ComponentFixture<CardTableAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTableAssignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTableAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
