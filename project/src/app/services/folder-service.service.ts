import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileNode } from '../interfaces/file-node';

@Injectable({
  providedIn: 'root'
})
export class FolderServiceService {

  constructor(private http:HttpClient) { }

  getFolderData(){
    const url = 'https://raw.githubusercontent.com/sanjaysamantra1/react_folder_explorer/main/src/data/data.json';
       return this.http.get<FileNode>(url);

  }
}
