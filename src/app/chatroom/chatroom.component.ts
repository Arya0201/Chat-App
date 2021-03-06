import { Component, OnInit,ViewChild,ElementRef,AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit,AfterViewChecked {
  @ViewChild('scroller') private feedContainer!: ElementRef; 
  constructor() { }

  ngOnInit(): void {
  }

  scrollToBottom(){
    this.feedContainer.nativeElement.scrollTop=this.feedContainer.nativeElement.scrollHeight;
  }
  ngAfterViewChecked(){
    this.scrollToBottom();
  }
}
