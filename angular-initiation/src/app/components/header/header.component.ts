import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'angular-initiation';
  constructor() { }

  ngOnInit(): void {
  }

  toggleNewTask(){
    console.log("NEW TASK EMITTED");
  }

}
