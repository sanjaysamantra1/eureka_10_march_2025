import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Messsage2Component } from './messsage2.component';

describe('Messsage2Component', () => {
  let component: Messsage2Component;
  let fixture: ComponentFixture<Messsage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Messsage2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Messsage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
