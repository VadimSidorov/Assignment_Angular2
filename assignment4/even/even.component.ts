import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  index:number;
  mes:string;

  constructor() { }

  ngOnInit() {
  }
something(){
  console.log('eventWorks')
}
}
