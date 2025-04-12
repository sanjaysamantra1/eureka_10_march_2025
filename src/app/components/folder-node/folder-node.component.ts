import { Component, Input } from '@angular/core';
import { FolderNode } from '../../folder.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-folder-node',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './folder-node.component.html',
  styleUrls: ['./folder-node.component.css']
})
export class FolderNodeComponent {
  @Input() node!: FolderNode;
  isExpanded = false;

  toggle(): void {
    if (this.node.isFolder) {
      this.isExpanded = !this.isExpanded;
    }
  }
}