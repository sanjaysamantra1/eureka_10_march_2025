
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface FileSystemItem {
  name: string;
  isFolder: boolean;
  items?: FileSystemItem[];
  isExpanded?: boolean; 
  // To track if a folder is expanded
}

@Component({
  selector: 'app-folder-structure',
  standalone: true,
  imports: [CommonModule, FolderStructureComponent], 
  // Import itself for recursion
  templateUrl: './folder-structure.component.html',
  styleUrl: './folder-structure.component.css',
})
export class FolderStructureComponent implements OnInit {
  @Input() fileItem: FileSystemItem | null = null; 
  // Input for each item in the tree

  loading: boolean = false;
  error: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (!this.fileItem) {
      this.fetchData(); 
      // Fetch data only for the root component
    }
  }

  fetchData(): void {
    this.loading = true;
    this.http.get<FileSystemItem>('https://raw.githubusercontent.com/sanjaysamantra1/react_folder_explorer/main/src/data/data.json')
      .subscribe({
        next: (data) => {
          this.fileItem = data;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Error fetching data.';
          console.error('Error fetching data:', error);
          this.loading = false;
        }
      });
  }

  toggleFolder(item: FileSystemItem): void {
    if (item.isFolder) {
      item.isExpanded = !item.isExpanded;
    }
  }
}
