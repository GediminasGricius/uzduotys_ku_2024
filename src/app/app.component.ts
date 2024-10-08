import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTaskComponent } from "./components/add-task/add-task.component";
import { ListTasksComponent } from "./components/list-tasks/list-tasks.component";
import { InfTasksComponent } from './components/inf-tasks/inf-tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddTaskComponent, ListTasksComponent, InfTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'uzduotys_ku_2024';
}
