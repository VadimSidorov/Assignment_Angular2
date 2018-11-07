import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {
  visible:boolean = true;
  word:string = "word";
  logs = [];
  i = 0;
  numbers = [0,1,2,3];
  background:string;
  countClicks:number= 0;

  constructor() { }

  ngOnInit() {
    this.logs = [];
  }
  fun(event:any){
    this.visible = !this.visible;
    this.i = this.i+1;
    this.logs.push(this.i);
    this.countClicks = this.countClicks+1
    console.log(this.countClicks)
  }
  getColor(i){
    console.log
    i=i+1;
    if (i>4){
      this.background = 'blue'
    }
    else{
      this.background = 'none'
    }
    return this.background
  }

}