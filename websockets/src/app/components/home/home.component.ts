import { Component, OnInit } from '@angular/core';
import {SocketService} from "../../services/socket.service"
import {NgForm} from "@angular/forms"
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: SocketService) { }
  tareas: Todo[] = []
  todos: Todo = {
    titulo: '',
    descripcion: ''
  }
  ngOnInit() {
    this.all()
    this.service.socket.on('newTaskAdded', () => {
      this.all()
    })
  }

  all(){
    this.service.getTasks()
    .subscribe(res => 
      {
        console.log(res);
        
        this.tareas = res
      
        console.log('tareas asignadas',this.tareas);
        
      }, err => console.log(err))
  }

  addToDo(task: NgForm){
    this.service.addTask(task.value).subscribe(res => console.log(res), err => console.log(err))
  }

}
