import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-assignments-ts',
  templateUrl: './assignments-ts.component.html',
  styleUrls: ['./assignments-ts.component.css']
})
export class AssignmentsTsComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
    //Exercise 1 
    let double = value=>value*2;
    console.log(double(10))
    //Exercise 2
    let greet = (name = 'Max')=>{
      console.log("hello,"+ name)
    }
    greet();
    greet("Anna");
    //Exercise3
    let numbers = [-3,33,38,5];
    console.log(...numbers)
    //Exercise4
    let newArray = [55,20];
    // Array.prototype.push.apply(newArray, numbers);
    newArray.push(...numbers)
    console.log(newArray)
    //Exercise5
    let testResult = [3.89,2.89,1.38];
    const [result1,result2,result3] = testResult
    console.log(result1,result2,result3)
    //Exercise6
    let scientist = {firstName:"Will", experience:12};
    const{firstName,experience} = scientist;
    console.log(firstName, experience)

    class Person {
      name:string;
      public type:string = 'something';
      protected age:number;
      private color:string;

      constructor(name:string, public username:string){
        this.name = name;
      }
    }
    
    const person = new Person("Max", 'max')
    console.log(person.type)
  }


  

}
