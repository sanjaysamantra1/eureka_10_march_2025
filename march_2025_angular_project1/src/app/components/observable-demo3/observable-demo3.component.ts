import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, switchMap, map, fromEvent, exhaustMap } from 'rxjs';

@Component({
  selector: 'app-observable-demo3',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './observable-demo3.component.html',
  styleUrl: './observable-demo3.component.css'
})
export class ObservableDemo3Component {
  searchResult$: Observable<any> | undefined;
  searchForm: any;
  constructor(private http: HttpClient) {
    this.searchForm = new FormGroup({
      searchField: new FormControl()
    });
  }
  ngOnInit() {
    this.searchResult$ = this.searchForm.get("searchField").valueChanges.pipe(
      switchMap((term) =>
        this.http.get<any>(`https://swapi.dev/api/people/?search=${term}`)
      ),
      map((response: any) =>
        response.count > 0 ? response.results : []
      ));
  }


  @ViewChild('loginBtn') loginBtn!: ElementRef;
  ngAfterViewInit() {
    fromEvent(this.loginBtn.nativeElement, 'click').pipe(exhaustMap((val) => {
      return this.http.get('https://jsonplaceholder.typicode.com/users')
    })).subscribe({
      next: (res) => console.log('Response:', res),
      error: (err) => console.error('Error:', err),
    })
  }
}
