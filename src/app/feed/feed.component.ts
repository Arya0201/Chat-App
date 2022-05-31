import { Component, OnInit,OnChanges, SimpleChanges} from '@angular/core';
import { ChatService } from '../chat.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit ,OnChanges{
  // feed?:any;
   items?: Observable<any>
  constructor(private chat:ChatService) { }

  ngOnInit(): void {
  
    //this.feed=this.chat.getMessages();
    this.items=this.chat.getMessages().valueChanges();
  }
  ngOnChanges(): void {
   // this.feed=this.chat.getMessages();
    this.items=this.chat.getMessages().valueChanges();
  }
}
