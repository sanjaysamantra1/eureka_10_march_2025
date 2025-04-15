import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistComponent } from './userlist.component';
import { provideHttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';

describe('UserlistComponent', () => {
  let component: UserlistComponent;
  let fixture: ComponentFixture<UserlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserlistComponent],
      providers:[
        provideHttpClient(),
        UserService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
