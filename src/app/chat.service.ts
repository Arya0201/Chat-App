import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/compat/database';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { ChatMessage } from './models/chat-message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user?: any;
  userId?: any;
  userEmail?:any;
  chatMessages!:AngularFireList<ChatMessage>;
  chatMessage!:ChatMessage;
  userName?:string;

  constructor(private db:AngularFireDatabase, private afAuth:AngularFireAuth) 
  {
    this.afAuth.authState.subscribe(auth=>{
        if(auth!==undefined && auth!==null){
            this.userId=auth.uid;
            this.userEmail=auth.email;
        }
        
        this.getUser().subscribe((a:any) =>{
          this.userName=a.displayName;
          console.log("xyz",this.userName);
        });
      });
     }
  
     getUser(){
      console.log("userid:",this.userId);
       const path=`/users/${this.userId}`
       return this.db.object(path).valueChanges();
     } 

   getUsers(){
    const path='/users';
    return this.db.list(path).valueChanges();
  }
  sendMessage(msg:string){
  const email=this.userEmail;  
  const timeStamp=this.getTimeStamp();
      this.chatMessages= this.getMessages();
      console.log(timeStamp);
      this.chatMessages.push({
        timeSent:timeStamp,
        message: msg,
        userName:this.userName,
        email:email
   });
  }
 getMessages():AngularFireList<ChatMessage>{
  return this.db.list('/messages', ref => {
    let q = ref.limitToLast(25).orderByKey();
    return q;
  });
}

  getTimeStamp():string {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
                 (now.getUTCMonth() + 1) + '/' +
                 now.getUTCDate();
    const time = now.getUTCHours() + ':' +
                 now.getUTCMinutes() + ':' +
                 now.getUTCSeconds();

    return (date + ' ' + time);
  }
}
