import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-list-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-tasks.component.html',
  styleUrl: './list-tasks.component.css'
})
export class ListTasksComponent {
  public tasks:String[]=[];


  public constructor(private taskService:TaskService){
    this.tasks=this.taskService.tasks;
  }

  public delete(i:number){
    this.taskService.deleteTask(i);
  }


}
