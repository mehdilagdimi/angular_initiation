import { Injectable } from '@angular/core';
import { TASKS } from 'src/app/mockTasks';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    // const tasks = of(TASKS);
    // return tasks;
    return this.http.get<Task[]>(this.apiUrl);
  }
}
