import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class TaskHeaderComponent implements OnInit {

  @Input() header = '';
  @Output() newTask = new EventEmitter<void>();
  @Output() moveTask = new EventEmitter<void>();
  @Output() deleteTask = new EventEmitter<void>();
  @Output() editTask = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onNewTaskClick() {
    this.newTask.emit();
  }

  onMoveAllTaskClick() {
    this.moveTask.emit();
  }

  onDeleteTaskClick() {
    this.deleteTask.emit();
  }

  onEditTaskClick() {
    this.editTask.emit();
  }
}
