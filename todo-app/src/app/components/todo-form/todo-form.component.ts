import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import {Todo} from './../../model/Todo';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'




@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  faTrashAlt = faTrashAlt;
  todos: Todo[] = [];

  constructor( private todoService : TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos =>{
      this.todos = todos 
    })
  }

}
