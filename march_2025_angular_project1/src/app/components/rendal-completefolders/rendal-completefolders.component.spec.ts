import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendalCompletefoldersComponent } from './rendal-completefolders.component';

describe('RendalCompletefoldersComponent', () => {
  let component: RendalCompletefoldersComponent;
  let fixture: ComponentFixture<RendalCompletefoldersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendalCompletefoldersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendalCompletefoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
