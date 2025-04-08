import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
//import { FileStructure } from '../../models/file-structure';
import { FolderStructureService } from '../../services/folder-structure.service';
import { FileStructure } from '../../models/file-structure';

@Component({
  selector: 'app-folder-structure',
  imports: [CommonModule],
  templateUrl: './folder-structure.component.html',
  styleUrl: './folder-structure.component.css'
})
export class FolderStructureComponent {
  isExpanded = false;

  @Input() node!: FileStructure;

  constructor(private folderStructureService: FolderStructureService) {
   
    //alert("bye");
  }

  toggle() {
    if (this.node.isFolder) {
      this.isExpanded = !this.isExpanded;
    }
  }


  

}
