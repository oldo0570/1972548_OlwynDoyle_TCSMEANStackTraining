import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../task';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tasks: Array<Task> = [];

  constructor(private _tasksService: TasksService) {  }

  ngOnInit(): void {
     this._tasksService.getTasks()
      .subscribe(result => this.tasks = result);
    //this.tasks = this._tasksService.getTasks();
  }
}
