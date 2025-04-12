import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderNodeComponent } from './folder-node.component';

describe('FolderNodeComponent', () => {
  let component: FolderNodeComponent;
  let fixture: ComponentFixture<FolderNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderNodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
