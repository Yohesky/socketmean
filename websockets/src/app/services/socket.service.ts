import { Injectable } from '@angular/core';
import * as io from "socket.io-client"
import {Observable, Subscriber} from "rxjs"
import {HttpClient} from "@angular/common/http"
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket: any
  server: string = 'https://websocketsmean.herokuapp.com'
  tasks = []
  constructor(private http: HttpClient) { 
    this.socket = io(this.server)
  }

  addTask(data: Todo){
    return this.http.post(this.server + "/api/newTask", data)
  }
  
  getTasks(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.server + "/api/all")
  }


}
