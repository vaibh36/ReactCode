import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Cricket} from './cricket.model'


@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent implements OnInit {

  constructor(private fb:FormBuilder,private store:Store<any>) { }

  ngOnInit() {
  }

  addCricketer(x){
    let cr = new Cricket(x);
    

  }

}

