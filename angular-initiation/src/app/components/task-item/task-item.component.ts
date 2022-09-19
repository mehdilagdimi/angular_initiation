import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
// library.add(faTimes);
import {IconDefinition } from '@fortawesome/fontawesome-common-types';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onRemoveTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes: IconDefinition = faTimes;
  constructor() { }

  ngOnInit(): void {
  }
  
  removeTask(task:Task) {
    // console.log(task);
    this.onRemoveTask.emit(task);
  }

  toggleReminder(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
