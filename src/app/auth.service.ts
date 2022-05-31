import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {AngularFireDatabase} from '@angular/fire/compat/database';
//import { User } from './models/user.model';
//import * as firebase from '@angular/fire/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

    user?:any ;
    authState:any;
  constructor(private afAuth:AngularFireAuth ,private db:AngularFireDatabase, private router:Router)
  {         
     this.user =afAuth.authState;
    
   }
   authUser(){
     return this.afAuth.authState;;
   }

   get currentUserId():string{
        return this.authState!==null ? this.authState.uid:'' ;
   }
   
   login(email:string,password:string){
     return this.afAuth.signInWithEmailAndPassword(email,password).then((resolve)=>{
       const status='online';
       this.authState=resolve.user;
       this.setUserStatus(status);
       this.router.navigate(['chat']);
     })
   }
   logout(){
     this.setUserStatus("offline");
     this.afAuth.signOut();
     this.router.navigate(['login']);
   }
   signUp(email:string,password:string,displayName:string){
     
       return this.afAuth.createUserWithEmailAndPassword(email, password)
       .then( (user)=>{
         console.log("success",user);
       this.authState= user.user;

       const status = 'online';
       this.setUserData(email, displayName, status);
      })
    .catch ((error)=>{
       console.log(error);
     })
   }
   setUserData(email:string,displayName:string,status:string){
     const path=`users/${this.currentUserId}`;
     const data={ 
       email:email,
       displayName:displayName,
       status:status
     };

     this.db.object(path).update(data)
     .catch((error)=>{
       console.log(error);
     });
    
   }
    setUserStatus(status:string){
     const path=`users/${this.currentUserId}`;
     const data={
       status:status
     };

     this.db.object(path).update(data)
     .catch(error => console.log(error));
     }
    }
    

