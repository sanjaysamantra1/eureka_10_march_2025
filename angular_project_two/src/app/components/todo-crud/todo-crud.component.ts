import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo';
import { deleteTodo, toggleTodo, addTodo } from '../../ngrx/actions/todo.action';

@Component({
  selector: 'app-todo-crud',
  imports: [
    CommonModule
  ],
  templateUrl: './todo-crud.component.html',
  styleUrl: './todo-crud.component.css'
})
export class TodoCrudComponent {
  todos$: Observable<any> | undefined;
   constructor(private store: Store) {
     this.todos$ = this.store.select((state: any) => state.todoArr); // selector
   }
   deleteMyTodo(todoId: number) {
     this.store.dispatch(deleteTodo({ id: todoId }));
   }
   toggleMyTodo(todoId: number) {
     this.store.dispatch(toggleTodo({ id: todoId }));
   }
 
   addNewTodo(todotext: string) {
     const newTodoObj: Todo = { id: 4, text: todotext, isCompleted: false };
     this.store.dispatch(addTodo({ newTodo: newTodoObj }));
   }
}
