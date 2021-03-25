import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private listeTodo: Todo[] = [];

  constructor() { }


  addTodo(nom: string, content: string) {
    this.listeTodo.push(new Todo('', nom, content));
  }

  getTodos() {
    return this.listeTodo;
  }

  deleteTodo(id: string){
    this.listeTodo.splice(this.listeTodo.findIndex((t: Todo) => t.id === id), 1);
  }

}
