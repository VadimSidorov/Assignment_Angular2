import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() firstevent = new EventEmitter<{number:number, message:string}>();
  a:number = 0;
  i:any;
  constructor() { }

  ngOnInit() {
    
  }
  

  test(){
    this.i = setInterval(()=>{
      this.a = this.a+1;
      this.firstevent.emit({number:this.a, message:'hello'})
    },1000)
  }
  clearTest(){
    clearInterval(this.i)
  }

}

 

