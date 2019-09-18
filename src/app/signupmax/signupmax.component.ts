import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signupmax',
  templateUrl: './signupmax.component.html',
  styleUrls: ['./signupmax.component.css']
})
export class SignupmaxComponent implements OnInit {

  constructor(private _register:AuthService) { }

  ngOnInit() {
  }

  onSign(x,y,z){
    this._register.createUser(x,y,z);

  }

}
