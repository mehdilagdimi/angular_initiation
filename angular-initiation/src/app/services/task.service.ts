import { Injectable } from '@angular/core';
import { TASKS } from 'src/app/mockTasks';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}