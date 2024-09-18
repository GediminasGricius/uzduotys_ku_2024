import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  public tasks:String[]=[];
  public name:String="";
  public constructor(private taskService:TaskService){
    this.tasks=this.taskService.tasks;

  }

  public addTask(){
    this.taskService.addTask(this.name);
    this.name="";
  }

}
