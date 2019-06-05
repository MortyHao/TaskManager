import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageListComponent),
      multi:true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ImageListComponent),
      multi:true
    },
  ],

})
export class ImageListComponent implements OnInit, ControlValueAccessor {


  imgSelected: string;

  @Input() title:string = "Pick you like";
  @Input() columns = 6;
  @Input() rowHeight = '64px';
  @Input() items: string[] = [];
  @Input() isSvgIcon = false;
  @Input() itemWidth = '80px';

  constructor() { }

  ngOnInit() {
  }

  private propagateChange = (_: any) => { };

  onChange(index: number) {
    this.imgSelected = this.items[index];
    this.propagateChange(this.imgSelected);
  }

  writeValue(obj: any): void {
    this.imgSelected=obj;
  }
  registerOnChange(fn: any): void {
    this.propagateChange=fn;
  }
  registerOnTouched(fn: any): void {
    
  }
  setDisabledState?(isDisabled: boolean): void {
    
  }

  validate(c:FormControl) :{[key:string]:any}{
    return this.imgSelected? null: {
      imageListInvalid:{
        valid:false
      }
    }
  }

}
