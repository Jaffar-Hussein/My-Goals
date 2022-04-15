import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // goal = "watch finding nemo"
    // goals:string[];

    // A constructor function defines the logic that should be executed 
    // once the class is instantiated

    // constructor(){
    //   this.goals = ['watch finding nemo',"learn angular","learn flask","finish school","do my internship"]
    // }
    // Using a class as the skeleton for building things
    // const getKeyValue = <T extends Goal, U extends keyof T>(key: U) => (Goal: T) =>
    // Goal[key];
    // let T: keyof Goal
    goals: Goal[] = [
      { id: 1, name: 'watch finding nemo' },
      { id: 2, name: "learn angular" },
      { id: 3, name: "learn flask" },
      { id: 4, name: "finish school" },
      { id: 5, name: "do my internship" },
    ]
  }

}
