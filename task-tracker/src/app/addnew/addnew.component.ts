import { Component, OnInit } from '@angular/core';

import { TasksService } from '../tasks.service';
import { Task } from '../task';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {

  constructor(public _tasksService: TasksService) { }

  ngOnInit(): void {
  }
  //name: string = "";
 // num: string = "";

  //taskModel = new Task(1, "Rob", "work", 12324);
  //task = new task()

  storeValue(tableRef: any) {
    console.log(tableRef);
    this._tasksService.storeTask(tableRef);
  }
  /*
  addTable(tableRef: any) {
    console.log(this.taskModel);
    this._tasksService.saveTask(this.taskModel)
      .subscribe(data => console.log("Succes!", data))
    //this.name = tableRef.name;
    //this.num = tableRef.num;
    //let obj = JSON.stringify(tableRef);
    //console.log(obj);
    //sessionStorage.setItem("projectInfo", obj);
    //this._tasksService.saveTask(this.Task)
      //.subscribe(data => this.tasks = data);
  }*/
}
