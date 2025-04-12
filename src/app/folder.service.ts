import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface FolderNode {
  name: string;
  isFolder: boolean;  //response object 
  items?: FolderNode[];  //data in  this format
}

@Injectable({ providedIn: 'root' })
export class FolderService {
  constructor(private http: HttpClient) {}

  getFolderStructure(): Observable<FolderNode> {
    return this.http.get<FolderNode>('https://raw.githubusercontent.com/sanjaysamantra1/react_folder_explorer/main/src/data/data.json');
  }
}