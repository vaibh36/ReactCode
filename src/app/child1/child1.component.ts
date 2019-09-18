import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() refValue:string;
  @Output() rvalue= new EventEmitter<{registerValue:string}>();
  newvalue="";
  constructor() { }

  ngOnInit() {
    this.newvalue = " I am registered with the parent component"
  }

  registerMe(){

    this.rvalue.emit({registerValue:this.newvalue});

  }

}
