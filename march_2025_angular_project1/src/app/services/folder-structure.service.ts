import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileStructure } from '../models/file-structure';

@Injectable({
  providedIn: 'root'
})
export class FolderStructureService {
  constructor(private http: HttpClient){ }

  getFolderStructure() {
    // const headers = new HttpHeaders().set('Accept', 'application/json');
    // return this.http.get<FileStructure>(`https://raw.githubusercontent.com/sanjaysamantra1/react_folder_explorer/main/src/data/data.json`, { headers });
    return this.http.get<FileStructure>(`https://raw.githubusercontent.com/sanjaysamantra1/react_folder_explorer/main/src/data/data.json`);
    
  }
}
