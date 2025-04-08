import { Component } from '@angular/core';
import * as data from './data.json';
import { FolderitemComponent } from "../folderitem/folderitem.component";
@Component({
  selector: 'app-folder',
  imports: [FolderitemComponent],
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.css'
})
export class FolderComponent {
  data =(data as any).default;
}
