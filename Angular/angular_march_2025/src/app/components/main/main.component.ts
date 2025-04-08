import { Component, OnInit } from '@angular/core';
import { FolderDataService } from '../../services/folder-data.service';
import { FileItem } from '../../models/file-item';
import { FolderStructureComponent } from '../folder-structure/folder-structure.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [
    CommonModule, 
    FolderStructureComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent implements OnInit {
  folderData: FileItem | null = null;

  constructor(private folderDataService: FolderDataService) {}

  ngOnInit(): void {
    this.folderData = this.folderDataService.getFolderData();
  }
}
