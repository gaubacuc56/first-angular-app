import { Component,  Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css'
})
export class AddTaskFormComponent {
  @Output() addTaskEvent = new EventEmitter<string>();
  
  handleAddTask(value: string) {
    if (value && value.length > 0)
      this.addTaskEvent.emit(value);
    else alert('Please enter task name')
  }
}
