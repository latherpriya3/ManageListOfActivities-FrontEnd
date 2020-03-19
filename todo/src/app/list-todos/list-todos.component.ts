import { Component, OnInit, DefaultIterableDiffer } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id: number,
    public username: string,
    public description: string,
    public isDone: Boolean,
    public targetDate: Date
  )
  {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos : Todo[]
  message: String
//  todos=[
//    new Todo(1,'Learn Angular',false,new Date),
//    new Todo(1,'Learn SpringBootr',false,new Date),
//    new Todo(1,'Learn How to use oAuth',false,new Date),
//    new Todo(1,'Learn Docker',false,new Date),

//  ]


  constructor(
    private todoService:TodoDataService,
    private router:Router
  ) { }

  ngOnInit() {
    this.refershTodo();
  }

  refershTodo(){
    this.todoService.retriceAllTodos('Priya').subscribe(
      response => 
      {
        this.todos = response;
      }
      )
  }
  deleteTodoById(id){

    console.log(`delete todo ${id}`)

     this.todoService.deleteTodoById('priya', id).subscribe(
      response =>{
      console.log(response);
     this.message = `Successfully deleted Todo ${id}`
     this.refershTodo();
      }
    )

  }

  updateTodoById(id){
    console.log(`Todo ${id} updated`)
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos', -1])
  }

}
