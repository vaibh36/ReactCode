import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-useractivity',
  templateUrl: './useractivity.component.html',
  styleUrls: ['./useractivity.component.css']
})
export class UseractivityComponent implements OnInit {

  message:string;
  email:string;
  activityData:string
  constructor(private route:ActivatedRoute,private router:Router,private _auth:AuthService) { }

  ngOnInit() {

    let email = this.route.snapshot.paramMap.get('email');
    console.log("Logged email is:-"+email);
    this.email = email;


  }

  getActivities(x){
    this._auth.getUserReleatedActivities(x).

    subscribe( data=>{
        this.activityData = data.activity;
      
       
      }
    )
   
    
  }

  NewActivity(x){
    this._auth.addOnlyActivity(x,this.email);
  }

}
