import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFolder,faFile, faChevronDown, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FileStructure } from '../../models/folder-structure';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-folder-structure',
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  templateUrl: './folder-structure.component.html',
  styleUrl: './folder-structure.component.css'
})
export class FolderStructureComponent {
  
  folder = faFolder;
  [x: string]: any;
  fileItem: FileStructure | null = null; 

  loading: boolean = false;
  error: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (!this.fileItem) {
      this.fetchData();
    }
  }

  fetchData(): void {
    this.loading = true;
    this.http.get<FileStructure>('https://raw.githubusercontent.com/sanjaysamantra1/react_folder_explorer/main/src/data/data.json')
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

  toggleFolder(item: FileStructure): void {
    if (item.isFolder) {
      item.isExpanded = !item.isExpanded;
    }
  }

 }
