import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  template: `
  <h2 mat-dialog-title>{{title}}</h2>
  <div mat-dialog-content>
  {{content}}
  </div>
  <div mat-dialog-actions>
  <button type="button" mat-raised-button color="primary"  (click)="onClick(true)">Confirm</button>
  <button type="button" mat-button mat-dialog-close (click)="onClick(false)">Cancle</button>
</div>
  `,
  styles: []
})
export class ConfirmDialogComponent implements OnInit {

  title='';
  content='';

  constructor(@Inject(MAT_DIALOG_DATA) private data,
  private dialogRef:MatDialogRef<ConfirmDialogComponent>) { }

  ngOnInit() {
    this.title=this.data.title;
    this.content=this.data.content;
  }

  onClick(result:boolean){
    this.dialogRef.close(result);
  }

}
