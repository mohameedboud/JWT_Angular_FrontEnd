import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   user: any;
   mode:number = 0  ;
   errorMessage : string | undefined ;
  constructor() { }

  ngOnInit(): void {
  }

  onRegister(user: any){
    //console.log(user)
    // @ts-ignore
    this.authService.register(user)
      .subscribe((resp: any) => {
        this.user = resp;
        this.mode=1;
        console.log(user)
      }, (err: any)=>{
        this.errorMessage = err.error.message;
           this.mode=0;
           console.log(user)
      })
  }
}
