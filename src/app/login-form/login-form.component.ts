import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  email!: string;
  password!: string;
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    console.log('login() called from login-form component');
    this.authService.login(this.email, this.password)
    .catch(error =>{
      console.log(error);
    } );
  }
}
