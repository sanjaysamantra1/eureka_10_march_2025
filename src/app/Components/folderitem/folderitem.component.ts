import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-folderitem',
  imports: [CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './folderitem.component.html',
  styleUrl: './folderitem.component.css',
  inputs:['node']
})
export class FolderitemComponent {
  faFolderOpen = faFolderOpen;
  faFile=faFile;
  node: any;
  isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }

  
}
