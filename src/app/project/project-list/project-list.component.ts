import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      "id":1,
      "name": "t1",
      "desc": "tesing",
      "coverImg":"assets/img/covers/0.jpg"
    },
    {
      "id":2,
      "name": "t2",
      "desc": "tesing",
      "coverImg":"assets/img/covers/1.jpg"
    },
    {
      "id":3,
      "name": "t3",
      "desc": "tesing",
      "coverImg":"assets/img/covers/2.jpg"
    },
    {
      "id":4,
      "name": "t4",
      "desc": "tesing",
      "coverImg":"assets/img/covers/3.jpg"
    }
  ];
  constructor(private dialog:MatDialog,private cd:ChangeDetectorRef) { }

  ngOnInit() {
  }

  openNewPorjectDialog(){
    const dialogRef=this.dialog.open(NewProjectComponent,{data:{title:'Create'}});
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result);
      this.projects=[...this.projects, {
        id:3,name:'new project',desc:'this is new one',coverImg:"assets/img/covers/6.jpg"}]
    });
    this.cd.markForCheck();
  }

  launchInviteDialog(){
    const dialogRef=this.dialog.open(InviteComponent);
    // dialogRef.afterClosed().subscribe(result=>{console.log(result)});
  }
  launchEditDialog(){
    const dialogRef=this.dialog.open(NewProjectComponent,{data:{title:'Edit'}});
  }
  launchDeleteDialog(project){
    const dialogRef=this.dialog.open(ConfirmDialogComponent,{data:{title:'Delete',content:'Confirm To Delete'}});
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result);
      this.projects=this.projects.filter(p=>p.id!==project.id);
      this.cd.markForCheck();
    });
  }
}
