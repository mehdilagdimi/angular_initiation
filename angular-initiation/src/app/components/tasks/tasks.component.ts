import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  removeTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );

  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }

  toggleReminder(task: Task) {
    // this.taskService.toggleReminder(task).subscribe((task) => this.tasks = this.tasks.map(t => {
    //   if(t === task){
    //     t.reminder = !t.reminder;
    //   }
    //   return t;
    // }));
    task.reminder = !task.reminder;
    this.taskService.toggleReminder(task).subscribe();
   
  }
}
