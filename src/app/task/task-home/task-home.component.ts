import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskHomeComponent implements OnInit {
  lists = [
    {
      id: 1,
      order:1,
      name: "Pending",
      tasks: [
        {
          id: 1,
          desc: "Task 1: Coding",
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: 'Morty',
            avatar: 'avatars:svg-11',
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 2,
          desc: "Task 2: Writing",
          completed: true,
          priority: 2,
          owner: {
            id: 2,
            name: 'Riki',
            avatar: 'avatars:svg-12',
          },
          dueDate: new Date(),
        },
      ]
    },
    {
      id: 2,
      order:2,
      name: "Pocessing",
      completed: true,
      tasks: [
        {
          id: 1,
          desc: "Task 1: Eating",
          completed: false,
          priority: 3,
          owner: {
            id: 3,
            name: 'Hao',
            avatar: 'avatars:svg-13',
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: "Task 2: Sleeping",
          completed: false,
          priority: 3,
          owner: {
            id: 2,
            name: 'Riki',
            avatar: 'avatars:svg-12',
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
      ]
    },
  ];


  constructor(private dialog: MatDialog, private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  launchNewTaskDialog() {
    const dialogRef = this.dialog.open(NewTaskComponent, { data: { title: 'New Task' } });
  }
  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, { data: { lists: this.lists } });
  }
  lauchUpdataTaskDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, { data: { title: 'Edit Task', task: task } });
  }
  launchDeleteTaskDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: 'Delete', content: 'Confirm To Delete' } });
    dialogRef.afterClosed().subscribe(result => { console.log(result) });
  }
  launchiEditTaskDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, { data: { title: 'Edit' } });
    dialogRef.afterClosed().subscribe(result => { console.log(result) });
  }

  launchNewListTaskDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, { data: { title: 'New Task List' } });
    dialogRef.afterClosed().subscribe(result => { console.log(result) });
  }

  handleDropped(draggedData,targetList) {
    switch (draggedData.tag) {
      case 'task-item':
        console.log('handling item');
        break;
      case 'task-list':
        console.log('handling list');
        const draggedList= draggedData.data;
        const tempOrder=draggedList.oreder;
        draggedList.order=targetList.order;
        targetList.order=tempOrder;
        break;
      default:
        break;

    }
  }

  handelQuickTask(desc:string){
    console.log(desc);
  }
}
