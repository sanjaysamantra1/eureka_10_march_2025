import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpEmployeeAddComponent } from './http-employee-add.component';

describe('HttpEmployeeAddComponent', () => {
  let component: HttpEmployeeAddComponent;
  let fixture: ComponentFixture<HttpEmployeeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpEmployeeAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpEmployeeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
