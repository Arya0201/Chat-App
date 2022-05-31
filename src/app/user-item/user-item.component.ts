import { Component, Input, OnInit } from '@angular/core';
//import { ChatService } from '../chat.service';
@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input()
  user:any;
  constructor() { }

  ngOnInit(): void {
  }

}
