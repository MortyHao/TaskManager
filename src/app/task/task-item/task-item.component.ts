import { Component, OnInit, Input, Output, EventEmitter, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { itemAnim } from 'src/app/animation/item.animation';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations:[
    itemAnim
  ],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  @Input() avatar;
  @Output() taskClick=new EventEmitter<void>();

  itemAnimationState='mouseOut';


  constructor() { }

  ngOnInit() {
    this.avatar=this.item.owner ? this.item.owner.avatar : 'unassigned';
  }

  onItemClick(){
    this.taskClick.emit();
  }
  onCheckBoxClick(event:Event){
    event.stopPropagation();
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.itemAnimationState='mouseHover';
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.itemAnimationState='mouseOut';
  }

}
