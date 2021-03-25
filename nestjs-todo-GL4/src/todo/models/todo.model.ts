import { TodoStatus } from "../enums/todo-status.enum";
import {v4 as uuidv4} from 'uuid';

// Classe = Native javascrip
// Interface = Non native to JS
// Class is faster for compiler

export class Todo{
  id: string;
  name: string;
  description: string;
  createdAt : Date;
  status: TodoStatus;

  constructor( 
    id = uuidv4(),
    name = '',
    description = '',
    date = new Date(),
    status = TodoStatus.waiting) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.status = status;
      this.createdAt = date;
    }
}

