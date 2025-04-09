import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileStructure } from './file-structure.model';
import { HttpClient } from '@angular/common/http';
import { usersData } from './fileData';

@Component({
  selector: 'app-file-explorer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.css'
  ]
})
export class FileExplorerComponent implements OnInit {
fileItem = usersData ;

  loading: boolean = false;
  error: string = '';

  // constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (!this.fileItem) {
      this.fetchData();
    }
  }

  fetchData(): void {
    this.loading = true;
    // this.http.get<FileStructure>('https://raw.githubusercontent.com/sanjaysamantra1/react_folder_explorer/main/src/data/data.json')
    //   .subscribe({
    //     next: (data) => {
    //       this.fileItem = data;
    //       this.loading = false;
    //     },
    //     error: (error) => {
    //       this.error = 'Error fetching data.';
    //       console.error('Error fetching data:', error);
    //       this.loading = false;
    //     }
    //   });
  }

  toggleFolder(item: FileStructure): void {
    if (item.isFolder) {
      item.isExpanded = !item.isExpanded;
    }
  }
}