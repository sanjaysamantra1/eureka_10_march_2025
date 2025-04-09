import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpsClientComponent } from './https-client.component';

describe('HttpsClientComponent', () => {
  let component: HttpsClientComponent;
  let fixture: ComponentFixture<HttpsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpsClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
