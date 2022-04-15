import { Component } from '@angular/core';
import{Goal} from './goal'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // goal = "watch finding nemo"
  // goals:string[];

  // A constructor function defines the logic that should be executed 
  // once the class is instantiated

  // constructor(){
  //   this.goals = ['watch finding nemo',"learn angular","learn flask","finish school","do my internship"]
  // }
  // Using a class as the skeleton for building things

  goals:Goal[] = [
    {id:1,name:'watch finding nemo'},
    {id:2,name:"learn angular"},
    {id:3,name:"learn flask"},
    {id:4,name:"finish school"},
    {id:5,name:"do my internship"},
  ]
}
