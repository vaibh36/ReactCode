import { Component, OnInit } from '@angular/core';
import{AuthService} from '../auth.service'

@Component({
  selector: 'app-loginmax',
  templateUrl: './loginmax.component.html',
  styleUrls: ['./loginmax.component.css']
})
export class LoginmaxComponent implements OnInit {

  constructor(private _login:AuthService) { }

  ngOnInit() {
  }

  onLogin(x,y){
    this._login.login(x,y);

  }

}
