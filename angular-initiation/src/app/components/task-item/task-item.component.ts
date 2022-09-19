import { Component, OnInit, Input } from '@angular/core';
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

  faTimes: IconDefinition = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}
