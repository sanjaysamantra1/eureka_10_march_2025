import { Component, input } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-folder-structure',
  imports: [CommonModule],
  templateUrl: './folder-structure.component.html',
  styleUrl: './folder-structure.component.css'
})
export class FolderStructureComponent {
  items = input.required<FileItem[]>();
  expandedFolders = new Set<string>();

  toggleFolder(item: FileItem): void {
    if (item.isFolder) {
      if (this.expandedFolders.has(item.name)) {
        this.expandedFolders.delete(item.name);
      } else {
        this.expandedFolders.add(item.name);
      }
    }
  }

  isExpanded(item: FileItem): boolean {
    return this.expandedFolders.has(item.name);
  }
}
