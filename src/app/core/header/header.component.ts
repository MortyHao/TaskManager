import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  sideBarToggle= new EventEmitter<void>();
  @Output()
  darkModelToggle= new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }
  openSidebar(){
    this.sideBarToggle.emit();
  }
  onChange(checked:boolean){
    this.darkModelToggle.emit(checked);
  }

}
