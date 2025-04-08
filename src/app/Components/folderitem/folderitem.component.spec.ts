import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderitemComponent } from './folderitem.component';

describe('FolderitemComponent', () => {
  let component: FolderitemComponent;
  let fixture: ComponentFixture<FolderitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
