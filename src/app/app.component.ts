import { Component } from '@angular/core';
import {FormGroup,FormBuilder,FormControl} from '@angular/forms';
import {Name} from '../app/names.model';
import {NamesService} from '../app/names.service';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {

  public dataproperty="I am a child component";
  userIsAuthentiated= false;
  private authListenerSubs:Subscription;
  title = 'Vaibhav Gera';
  ns:Name
  name= 'My name is Vaibhav Gera';
  msg:string;
  child1Data:string
  constructor(private ser:NamesService,private fb:FormBuilder,private _auth:AuthService){

  }

  ngOnInit(){

    this.authListenerSubs = this._auth.getAuthStatusListener().subscribe(isAuthenticated=>{
      this.userIsAuthentiated = isAuthenticated;
    });
    this._auth.autoAuthUser();

  }

  NameForm= this.fb.group({
    FirstName: ["",],
    LastName:["",]
  });

  addData(a,b){
   
    this.ns = new Name(a,b);
    console.log('inside ap component:-'+ this.ns.firstname)
    this.ser.AddViaService(this.ns.firstname,this.ns.lastname).
      subscribe(

        response =>{
          console.log('Success',response);
          this.msg= response;

        },
        error=> console.log('Error',error)

      );

      
  }

  onLogout(){
   this._auth.logout();
  }

  registerChild1(event){
    
    console.log(event.registerValue)

  }

}
