import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

export interface ITask {
  id: string
  name: string
}
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  public defaultTaskList: ITask[]  = [
    {
      id: uuidv4(),
      name : 'Task 1'
    },
    {
      id: uuidv4(),
      name : 'Task 2'
    },
    {
      id: uuidv4(),
      name : 'Task 3'
    },
  ]
  addTask(newItem: string) {
    this.defaultTaskList.push({id: uuidv4(), name: newItem});
  }
  removeTask(id: string) {
    let _tmp = this.defaultTaskList.filter(item => item.id !== id)
    this.defaultTaskList = _tmp
  }
  editTask (task: ITask) {
    this.defaultTaskList.forEach(item => {
      if (item.id === task.id)
        item.name = task.name
    })
  }
}
