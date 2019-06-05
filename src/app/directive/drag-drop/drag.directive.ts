import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';
import { DragDropService } from '../drag-drop.service';

@Directive({
  selector: '[app-draggable][dragTag][dragData][draggedClass]'
})
export class DragDirective {
  @Input() draggedClass: string;
  @Input() dragTag:string;
  @Input() dragData:any;

  private _isDraggable = false;

  @Input('app-draggable')
  set isDraggable(value: boolean) {
    this._isDraggable = value;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${value}`);
  }
  get isDraggable() {
    return this._isDraggable;
  }

  constructor(
    private el: ElementRef, 
    private rd: Renderer2,
    private service: DragDropService) {}

  @HostListener('dragstart', ['$event'])
  onDragStart(event: Event) {
    if (this.el.nativeElement === event.target) {
      this.rd.addClass(this.el.nativeElement, this.draggedClass);
      this.service.setDragData({tag:this.dragTag,data:this.dragData});
    }
  }
  @HostListener('dragend', ['$event'])
  onDragEnd(event: Event) {
    if (this.el.nativeElement === event.target) {
      this.rd.removeClass(this.el.nativeElement, this.draggedClass);
    }
  }
}
