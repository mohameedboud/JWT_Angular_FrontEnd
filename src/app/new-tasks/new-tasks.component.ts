import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-tasks',
  templateUrl: './new-tasks.component.html',
  styleUrls: ['./new-tasks.component.css']
})
export class NewTasksComponent implements OnInit {
   task: any
   mode: number= 1
  constructor(public authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  onSaveTask(task: any){
    // @ts-ignore
    this.authService.saveTask(task)
      .subscribe((resp: any) => {
        this.task = resp;
        this.mode=2;
      }, (err: any)=>{
        this.mode=0;
        console.log(err)
      })
  }

}
