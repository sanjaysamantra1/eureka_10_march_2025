import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialsComponent } from './essentials.component';

describe('EssentialsComponent', () => {
  let component: EssentialsComponent;
  let fixture: ComponentFixture<EssentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EssentialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
