import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../to-do-list.component';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  @Input() task: ITask[] = [];
  @Output() removeTaskEvent = new EventEmitter<string>();
  @Output() editTaskEvent = new EventEmitter<ITask>();

  public isEditing: string | null = null;

  handleRemoveTask(value: string) {
    this.removeTaskEvent.emit(value);
  }

  handleClickEdit(value: string) {
    if (this.isEditing === value) this.isEditing = null;
    else this.isEditing = value;
  }

  handleEditTask(value: string) {
    if (value && value.length > 0) {
      this.editTaskEvent.emit({ id: this.isEditing as string, name: value });
      this.isEditing = null;
    } else alert('Please enter task name');
  }
}
