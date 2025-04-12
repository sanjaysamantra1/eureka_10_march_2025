import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelformComponent } from './modelform.component';

describe('ModelformComponent', () => {
  let component: ModelformComponent;
  let fixture: ComponentFixture<ModelformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
