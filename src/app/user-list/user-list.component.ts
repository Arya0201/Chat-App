import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:any;
  constructor(chat:ChatService) {
    chat.getUsers().subscribe((a)=>{
      this.users=a;
      console.log("user display:" ,this.users);
    })
   }

  ngOnInit(): void {
  }

}
