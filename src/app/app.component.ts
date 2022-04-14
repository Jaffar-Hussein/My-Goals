import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // goal = "watch finding nemo"
  goals:string[];

  // A constructor function defines the logic that should be executed 
  // once the class is instantiated

  constructor(){
    this.goals = ['watch finding nemo',"learn angular","learn flask","finish school","do my internship"]
  }
}
