import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public tasks:String[]=[];

  public onTasksCountChange=new EventEmitter();

  constructor() { 
    let tmp=localStorage.getItem("tasks");
    if (tmp!=null){
      this.tasks=JSON.parse(tmp);
    }
  }


  private save(){
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  public addTask(task:String){
    this.tasks.push(task);
    this.save();
    this.onTasksCountChange.emit();
  }

  public deleteTask(i:number){
    this.tasks.splice(i,1);
    this.save();
    this.onTasksCountChange.emit();
  }
}
