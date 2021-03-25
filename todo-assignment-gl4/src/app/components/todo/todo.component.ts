import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  nom = '';
  content = '';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTodo() {
   if(this.content === '' || this.nom === '') {
     return;
   }
   this.todoService.addTodo(this.nom, this.content);
   console.log(this.todoService.getTodos());
   this.nom = '';
   this.content = '';
  }

  getTodos(){
    return this.todoService.getTodos();
  }

  deleteTodo(id: string){
    this.todoService.deleteTodo(id);
  }



}
