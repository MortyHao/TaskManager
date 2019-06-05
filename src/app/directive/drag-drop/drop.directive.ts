import { Directive, ElementRef, Renderer2, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { DragDropService, DragData } from '../drag-drop.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Directive({
  selector: '[app-droppable][dragEnterClass][dropTags]'
})
export class DropDirective {

  @Output() dropped = new EventEmitter<DragData>();
  @Input() dragEnterClass='';
  @Input() dropTags: string[] = [];
  private data$;

  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private service: DragDropService) {
    this.data$ = this.service.getDragData().pipe(take(1));
  }

  @HostListener('dragenter', ['$event'])
  onDragEnter(event: Event) {
    event.preventDefault();
    event.stopPropagation()
    if (this.el.nativeElement === event.target) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
          this.rd.setProperty(this.el.nativeElement, 'dataTransfer.effectAllowed', 'all');
          this.rd.setProperty(this.el.nativeElement, 'dataTransfer.dropEffect', 'move');
        }
      })
    }
  }
  @HostListener('dragover', ['$event'])
  onDragOver(event: Event) {
    event.preventDefault();
    event.stopPropagation()
    if (this.el.nativeElement === event.target) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.setProperty(event,'dataTransfer.effectAllowed','all');
          this.rd.setProperty(event,'dataTransfer.dropEffect','move');
        }else{
          this.rd.setProperty(event,'dataTransfer.effectAllowed','none');
          this.rd.setProperty(event,'dataTransfer.dropEffect','none');
        }
      })
    }
  }
  @HostListener('dragleave', ['$event'])
  onDragLeave(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if(this.el.nativeElement === event.target){
      this.data$.subscribe(dragData=>{
        if(this.dropTags.indexOf(dragData.tag)>-1){
          this.rd.removeClass(this.el.nativeElement,this.dragEnterClass);
        }
      })
    }
  }
  @HostListener('drop', ['$event'])
  onDrop(event: Event) {
    event.preventDefault();
    event.stopPropagation()
    if (this.el.nativeElement === event.target) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
          this.dropped.emit(dragData);
          this.service.clearDragData();
        }
      })
    }
  }
}
