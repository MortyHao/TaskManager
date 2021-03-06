import { Component, OnInit } from '@angular/core';
import {getDay} from 'date-fns';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  today:string;
  constructor() { }

  ngOnInit() {
    this.today=getDay(new Date()).toString();
  }

}
