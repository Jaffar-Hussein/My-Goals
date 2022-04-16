import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[]

  constructor() {
    this.goals = [
      // { id: 1, name: 'watch finding nemo',description:"because it is fun with fishes" },
      // { id: 2, name: "learn angular",description:"because i will make money" },
      // { id: 3, name: "learn flask",description:"because because i like python" },
      // { id: 4, name: "finish school",description:"because i will get married InshAllah" },
      // { id: 5, name: "do my internship",description:"because I like the brain " },
      new Goal(1, 'watch finding nemo', "because it is fun with",new Date("2-01-1987")),
      new Goal(2, "learn angular", "because i will make money",new Date("2-01-1987")),
      new Goal(3, "learn flask", "because because i like python",new Date("2-01-1987")),
      new Goal(4, "finish school", "because i will get married InshAllah",new Date("2-01-1987")),
      new Goal(5, "do my internship", "because I like the brain ",new Date("2-01-1987"))
    ]
  }
  toggleDetails(i: number) {
    this.goals[i].descriptionVisibility = !this.goals[i].descriptionVisibility;
  }
  // DELETING A GOAL
  completedGoal(isComplete:boolean,i:number){
    if (isComplete){
      this.goals.splice(i,1)
    }
  }
  updateGoal(goal: any){
    const length = this.goals.length+1
    goal.id = length;
    this.goals.push(goal)
    
    console.log(this.goals);
    

  }

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
  }

}
