import { Component, OnInit } from '@angular/core';
import { FolderNode , FolderService} from '../../folder.service';
import { CommonModule } from '@angular/common';
import { FolderNodeComponent } from '../folder-node/folder-node.component';




@Component({
  selector: 'app-folder-tree',
  standalone: true,
  imports: [CommonModule, FolderNodeComponent],
  templateUrl: './folder-tree.component.html',
})
export class FolderTreeComponent implements OnInit {
  folderStructure?: FolderNode;

  constructor(private folderService: FolderService) {}   //injecting folder service

  ngOnInit(): void {
    this.folderService.getFolderStructure().subscribe((data) => {
      this.folderStructure = data;
    });
  }
}