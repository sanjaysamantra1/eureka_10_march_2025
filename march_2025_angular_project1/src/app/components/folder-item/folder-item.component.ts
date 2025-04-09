import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-folder',
  standalone: true,
  imports: [CommonModule, FolderComponent], // Self import for recursion
  templateUrl: './folder-item.component.html',
  styleUrls: ['./folder-item.component.css']
})
export class FolderComponent {
  @Input() node: any;
}
