import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserName: string;
  Password: string;
  constructor(private router : Router) { 
  }

  ngOnInit() 
  {

  }

  onSubmit(form: NgForm) {
    if (form.valid) 
    {
      localStorage.setItem('currentUser',"ADMIN")
      localStorage.setItem('imgSRC',"assets/images/profile_av.jpg")
      localStorage.setItem('rolename',"Administrator")
      localStorage.setItem('role',"1")
      this.router.navigate(['/app/skyfinch/dashboard']);
    }
  }

}
