import {v1 as uuid} from 'uuid';

export class Todo {


  constructor(
    public id: string = '',
    public name: string,
    public content: string
  ) {
    this.id = uuid();
    this.name = name;
    this.content = content;
  }




}
