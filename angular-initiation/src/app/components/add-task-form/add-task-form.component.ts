import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import {Task } from '../../Task';

import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css'],
})
export class AddTaskFormComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription! : Subscription;
  
  

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value)=> this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  addTask(task: Task){
    // this.taskService.addTask(task).subscribe();
  }
  onSubmit(){
    if(!this.text){
      alert("Please enter a task")
       return;
    }

    const newTask : Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    // this.addTask(newTask);
    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
