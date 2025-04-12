import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiFunctionComponent } from './multi-function.component';

describe('MultiFunctionComponent', () => {
  let component: MultiFunctionComponent;
  let fixture: ComponentFixture<MultiFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiFunctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

});

