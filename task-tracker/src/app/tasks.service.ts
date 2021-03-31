import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from './task';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private taskUrl = "https://localhost:3000/tasks";
  //taskUrl = "";
  constructor(private http: HttpClient) {  }
  /*
  getTasks(): Observable<Task[]> {
    console.log(this.taskUrl);
    return this.http.get<Task[]>(this.taskUrl);
  }*/
  storeTask(task:any) {
    this.http.post("http://localhost:3000/tasks", task).subscribe(result => console.log(result), error=> console.log(error));
  }
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:3000/tasks')
  }
}
