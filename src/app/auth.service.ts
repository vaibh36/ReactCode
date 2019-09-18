import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {AuthData} from './auth-data.model';
import {Router} from '@angular/router';
import {LoginAuthData} from './login-auth-data.model';
import {OnlyActivity} from './onlyactivity.model';
import { from,Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  activityData:[]
  private tokenTimer:any;
  private token:string;
  private authStatusListener = new Subject<boolean>()
  private isAuthenticated= false;

  constructor(private http:HttpClient,private router:Router) { }

  
  getToken(){
    return this.token;
  }

  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }

  getIsAuth(){
    return this.isAuthenticated;
  }

  createUser(x,y,z){

    const authdata:AuthData = {email:x,password:y,activity:z};
    this.http.post("http://localhost:3000/signup",authdata).
    subscribe(response=>{
      console.log(response)
    })

  }

  login(x,y){
    const authdata:LoginAuthData = {email:x,password:y};
    this.http.post<{token:string,expiresIn:number}>("http://localhost:3000/login",authdata).
    subscribe(response=>{
      const token = response.token;
      this.token= token;
      if(token){
      const expiresInDuration = response.expiresIn;
     this.setAuthTimer(expiresInDuration)

      console.log(expiresInDuration);
      this.isAuthenticated=true;
      this.authStatusListener.next(true);
      const now = new Date();
      const expirationDate = new Date(now.getTime()+ expiresInDuration * 1000);
      this.saveAuthData(token,expirationDate)
      this.router.navigate(['/activity',x]);
      }
    })
  }

  addOnlyActivity(x,y){

    const authaddnewaaaactivity:OnlyActivity = {activity:x,email:y};

    this.http.post("http://localhost:3000/addnewactivity",authaddnewaaaactivity).
    subscribe(response=>{
      console.log(response)
    })


  }


  autoAuthUser(){

   const authInformation =  this.getAuthData();
   const now = new Date();
   const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
   if(expiresIn > 0){
     this.token = authInformation.token;
     this.isAuthenticated = true;
     this.setAuthTimer(expiresIn/1000)
     this.authStatusListener.next(true);
   }

  

  }

  private setAuthTimer(duration:number){
    console.log("Seting Timer:-"+ duration)
    this.tokenTimer=  setTimeout(()=>{
      this.logout();
  },duration*1000)
     
  }

  logout(){
    this.token=null;
    this.isAuthenticated= false;
    this.authStatusListener.next(false);
    this.router.navigate(['/homepage']);
    this.clearAuthData();
    clearTimeout(this.tokenTimer);
  }

  saveAuthData(token:string,expirationDate:Date){

    localStorage.setItem('token',token);
    localStorage.setItem('expiration',expirationDate.toISOString())

  }

  private clearAuthData(){
    localStorage.removeItem("token");
    localStorage.removeItem("expiration")
  }

  getAuthData(){
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");

    if(!token || !expirationDate){
      return ;
    }

    return{
      token:token,
      expirationDate:new Date(expirationDate)
    }


  }

  getUserReleatedActivities(x){
    console.log("Inside angular service");

   
   return  this.http.get<any>('http://localhost:3000/getactivity/getUserActivities/'+x).pipe(
    
    
   )
    
  }


}
