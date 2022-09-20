import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'angular-initiation';
  showAddTask!: boolean;
  subscription!: Subscription;
  constructor(private uiService: UiService, private router: Router) { 
    this.subscription = this.uiService.onToggle().subscribe((returnedState) => this.showAddTask = returnedState);
  }

  ngOnInit(): void {
  }
  

  toggleNewTask(){
    // console.log("NEW TASK EMITTED");
    // this.uiService.onToggle().subscribe();
    this.uiService.toggleAddTask();
  }

  hasRoute(route:string){
    return this.router.url === route;
  }

}
