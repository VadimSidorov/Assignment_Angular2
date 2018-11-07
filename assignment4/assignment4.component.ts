import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit {
  evens = [];
  odds = [];
  num:number;
  mes:string;
  constructor() { }
  something(data:{number:number, message:string}){
    this.num = data.number;
    this.mes = data.message;
    if(this.num%2 === 0){
      this.evens.push(data.number);
      console.log(this.evens)
    }
    else{
      this.odds.push(data.number);
      console.log(this.odds)
    }
  }

  ngOnInit() {
  }

}
