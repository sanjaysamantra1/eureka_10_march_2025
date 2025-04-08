import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCrudHttpComponent } from './user-crud-http.component';

describe('UserCrudHttpComponent', () => {
  let component: UserCrudHttpComponent;
  let fixture: ComponentFixture<UserCrudHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCrudHttpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCrudHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
