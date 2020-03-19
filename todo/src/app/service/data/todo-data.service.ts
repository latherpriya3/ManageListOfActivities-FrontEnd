import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo} from '../../list-todos/list-todos.component'
@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retriceAllTodos(username){
    //console.log("Before calling URL");
     return this.http.get<Todo[]>(`http://localhost:8888/users/${username}/todos`);
    
  }

  deleteTodoById(username,id){

    return this.http.delete(`http://localhost:8888/users/${username}/todos/${id}`);
    
  }

  retriveTodoById(username,id){

    return this.http.get<Todo>(`http://localhost:8888/users/${username}/todos/${id}`);
    
  }
  
  updateTodoById(username,id, Todo){

    return this.http.put(`http://localhost:8888/users/${username}/todos/${id}`,Todo);
    
  }

  createTodo(username,Todo){

    return this.http.post(`http://localhost:8888/users/${username}/todos/`,Todo);
    
  }



}
