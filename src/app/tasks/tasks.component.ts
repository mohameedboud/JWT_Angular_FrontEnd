import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: any;
  constructor(public authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.authService.getTasks()
      .subscribe(data =>{
        console.log(data)
        this.tasks=data;
      }, error => {
        this.authService.logout();
        this.router.navigateByUrl('/login')
      })
  }
  onNewTask(){
    this.router.navigateByUrl('/new-task');
  }

}
