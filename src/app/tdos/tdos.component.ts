import { Component, OnInit } from '@angular/core';
import{todo} from '../Models/todo';
@Component({
  selector: 'app-tdos',
  templateUrl: './tdos.component.html',
  styleUrls: ['./tdos.component.css']
})
export class TdosComponent implements OnInit {
todos: todo[];
inputTodo:string="";
  constructor() { }

  ngOnInit(): void {

this.todos=[
  {
    content:'first todo',
    completed:false
  },

  {
    content:'second todo',
    completed:true
  }
]

  }
  toggleDone(id){
    this.todos.map((v,i)=>{
      if(i==id) v.completed=!v.completed;
      return v;
    })
  }
  deleteTodo(id){
    this.todos=this.todos.filter((v,i)=>i!==id)
  }
addTodo(){
  this.todos.push({
    content:this.inputTodo,
    completed:false
  })

  this.inputTodo="";

}
}
