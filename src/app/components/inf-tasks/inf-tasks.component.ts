import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-inf-tasks',
  standalone: true,
  imports: [],
  templateUrl: './inf-tasks.component.html',
  styleUrl: './inf-tasks.component.css'
})
export class InfTasksComponent {
  public taskCount;
  public constructor(private taskService:TaskService){
    this.taskCount=taskService.tasks.length;

    taskService.onTasksCountChange.subscribe(()=>{
      this.taskCount=taskService.tasks.length;
    });
  }

}
