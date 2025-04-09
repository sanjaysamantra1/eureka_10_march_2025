import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  private apiURL = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getFolderStructure(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }
}
