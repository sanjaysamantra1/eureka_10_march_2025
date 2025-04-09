import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderService } from '../../services/project-data.service';
import { FolderComponent } from '../folder-item/folder-item.component';


@Component({
  selector: 'app-folder-explorer',
  standalone: true,
  imports: [CommonModule,FolderComponent],
  templateUrl: './folder-explorer.component.html',
  styleUrls: ['./folder-explorer.component.css']
})
export class FolderExplorerComponent {
  folderData: any = null;
  isLoading: boolean = false;

  constructor(private folderService: FolderService) {}

  ngOnInit() {
    this.fetchFolderData();
  }

  fetchFolderData() {
    this.isLoading = true;
    this.folderService.getFolderStructure().subscribe({
      next: (response) => {
        this.folderData = response;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching folder data', err);
        this.isLoading = false;
      }
    });
  }
}
