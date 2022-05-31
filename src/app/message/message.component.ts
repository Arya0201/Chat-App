import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ChatMessage } from '../models/chat-message.model';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input()chatMessage?: ChatMessage;
  userEmail?:string;
  userName?:string;
  messageContent?:string;
  timestamp?:string;
  isOwnMessage?: boolean;
  ownEmail:any;
  constructor(private authService: AuthService) {
    this.authService.authUser().subscribe(user=>{
        this.ownEmail=user?.email;
        this.isOwnMessage = this.ownEmail === this.userEmail;
    })
   }

  ngOnInit(chatMessage=this.chatMessage): void {
    this.messageContent=chatMessage?.message;
    this.userEmail=chatMessage?.email;
    this.userName=chatMessage?.userName;
    this.timestamp=chatMessage?.timeSent;
  }

}
