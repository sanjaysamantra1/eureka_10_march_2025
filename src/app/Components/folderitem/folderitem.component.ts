import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-folderitem',
  imports: [CommonModule],
  templateUrl: './folderitem.component.html',
  styleUrl: './folderitem.component.css',
  inputs:['node']
})
export class FolderitemComponent {
  node: any;
  isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }
  get iconClass(): string {
    return 'bi ' + (this.isOpen ? 'bi-folder-fill' : 'bi-folder');
  }

}
