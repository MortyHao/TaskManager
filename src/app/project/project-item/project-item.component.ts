import { Component, OnInit, Input, Output, EventEmitter, HostBinding,HostListener, ChangeDetectionStrategy} from '@angular/core';
import { cardAnim } from '../../animation/card.animation';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations:[
    cardAnim
  ],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  @Output() onInvite = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<void>();
  @HostBinding('@card') cardState='out';


  constructor() { }

  ngOnInit() {
  }

  onInviteClick() {
    this.onInvite.emit();
  }
  onEditClick(){
    this.onEdit.emit();
  }
  onDeleteClick(){
    this.onDelete.emit();
  }
  // @HostListener('mouseenter',[$event.target])
  @HostListener('mouseenter')
  onMouseEnter(){
    this.cardState='mouseHover';
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.cardState='mouseOut';
  }

}
