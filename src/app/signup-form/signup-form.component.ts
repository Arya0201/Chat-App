import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
   email!:string;
   password!:string;
   displayName!:string;
   errorMsg!:string;
  constructor(private authService:AuthService , private router:Router) { }

  ngOnInit(): void {
  }
  signUp(){
    const email=this.email;
    const password=this.password;
    const displayName=this.displayName;
    this.authService.signUp(email,password,displayName).
   then(() =>{
              this.router.navigate(['chat'])
    }).catch((error:any) =>{
      this.errorMsg=error.message;
    });  
  }

}
