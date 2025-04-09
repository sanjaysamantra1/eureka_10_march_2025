import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { FileStructure } from './components/file-explorer/file-structure.model';

@Injectable({
  providedIn: 'root'
})
export class FileStructureService {
  private dataUrl = 'https://raw.githubusercontent.com/sanjaysamantra1/react_folder_explorer/main/src/data/data.json';

  constructor(private http: HttpClient) { }

  getFolderData(): Observable<FileStructure> {
    return this.http.get<FileStructure>(this.dataUrl);
  }
}
