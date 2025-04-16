import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFile, faFolder } from '@fortawesome/free-solid-svg-icons';
import { FileNode } from '../../interfaces/file-node';
import { FolderServiceService } from '../../services/folder-service.service';


@Component({
  selector: 'app-folder-structure',
  imports: [CommonModule,
  FontAwesomeModule],
  templateUrl: './folder-structure.component.html',
  styleUrl: './folder-structure.component.css'
})
export class FolderStructureComponent implements OnInit {
    projectStructure: FileNode | null = null;
    fafolder = faFolder;
    fafile = faFile;
  
    constructor(private folderService:FolderServiceService) {}
  
    ngOnInit(): void {
      this.getFolderData();
    }
    
    getFolderData(): void{
      this.folderService.getFolderData().subscribe(data => {
        console.log(data)
        this.projectStructure = data;
      });
    }
    
    toggle(folder: any): void {
      folder.expanded = !folder.expanded;
    }

}
