import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import * as firebase from '@angular/fire/auth';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user?: Observable<firebase.User | null>;
  userEmail?:any;
  User:boolean=false;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.authUser().subscribe((user)=>{
      if(user)
      {
        this.userEmail=user.email;
        this.User=true;
      }
    })
  }
  logout() {
    this.authService.logout();
  }

}
