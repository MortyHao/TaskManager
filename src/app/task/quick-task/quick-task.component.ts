import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-quick-task',
  templateUrl: './quick-task.component.html',
  styleUrls: ['./quick-task.component.scss']
})
export class QuickTaskComponent implements OnInit {

  @Output() quickTask = new EventEmitter<string>();
  desc: string;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('keyup.enter')
  sendQuickTask() {
    if(!this.desc || this.desc.length===0 || !this.desc.trim()){
      console.log('fail'+this.desc);
      console.log('fail'+this.desc.length);
      console.log('fail'+this.desc.trim());
    }
    else{
      this.quickTask.emit(this.desc);
      this.desc='';
    }
  }
}
