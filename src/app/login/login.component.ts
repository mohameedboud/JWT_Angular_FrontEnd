import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   mode:number=0;
  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }


  onlogin(user: any) {
    this.authService.login(user)
      .subscribe(resp =>{
        let jwt=resp.headers.get('Authorization');
        //console.log(resp.headers.get('Authorization'));
        this.authService.saveToken(jwt);
        this.router.navigateByUrl('/tasks');
      }, err=>{
        this.mode=1;
      })
  }

  onRegistration(){
    this.router.navigateByUrl('/register');
  }
}
