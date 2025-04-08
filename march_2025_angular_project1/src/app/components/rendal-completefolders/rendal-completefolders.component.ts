import { Component, NgModule } from '@angular/core';
import { FolderStructureService } from '../../services/folder-structure.service';
//import { FileStructure } from '../../models/file-structure';
import { FormsModule } from '@angular/forms';
import { FolderStructureComponent } from '../folder-structure/folder-structure.component';
import { FileStructure } from '../../models/file-structure';

@Component({
  selector: 'app-rendal-completefolders',
  imports: [FormsModule, FolderStructureComponent],
  templateUrl: './rendal-completefolders.component.html',
  styleUrl: './rendal-completefolders.component.css'
})
export class RendalCompletefoldersComponent {
  rootNode!: FileStructure;
  constructor(private folderStructureService: FolderStructureService) {
  {
    
      this.folderStructureService.getFolderStructure().subscribe(data => {
        alert("hi");
        this.rootNode = data;
      });;
    }
  }
}
