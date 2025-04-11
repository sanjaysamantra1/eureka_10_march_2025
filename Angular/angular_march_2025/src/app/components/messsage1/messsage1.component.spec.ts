import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Messsage1Component } from './messsage1.component';

describe('Messsage1Component', () => {
  let component: Messsage1Component;
  let fixture: ComponentFixture<Messsage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Messsage1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Messsage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
