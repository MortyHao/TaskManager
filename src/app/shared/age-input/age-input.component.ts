import {
  Component,
  OnInit,
  Input,
  forwardRef
}
  from '@angular/core';

import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormControl,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import {
  subYears,
  subMonths,
  subDays,
  isBefore,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  parse
} from 'date-fns';
import { Observable, merge ,combineLatest} from 'rxjs';
import { map, filter } from 'rxjs/operators';
// import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-age-input',
  templateUrl: './age-input.component.html',
  styleUrls: ['./age-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AgeInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AgeInputComponent),
      multi: true
    },
  ],
})
export class AgeInputComponent implements OnInit, ControlValueAccessor {

  ageForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.ageForm = this.fb.group({
      birthday: [],
      age: this.fb.group({
        ageNum: [],
        ageUnit: [],
      }),
    });

    const birthday = this.ageForm.get('birthday');
    const ageNum = this.ageForm.get('age').get('ageNum');
    const ageUnit = this.ageForm.get('age').get('ageUnit');

    const birthday$ = birthday.valueChanges.pipe(
      map(date => {return {date: date, from: 'birthday'};})
      );
    const ageNum$ = ageNum.valueChanges;
    const ageUnit$ = ageUnit.valueChanges;
    const age$ = combineLatest(ageNum$, ageUnit$,(aNum,aUnit)=>
    this.toDate({age:aNum,unit:aUnit}))
    .pipe(
      map(d=>({date:d,form:'age'})),
      filter(_=>age$.valid)
    )

    const merged$ = merge(birthday$, age$);
  }

  private propagateChange = (_: any) => { };

  writeValue(obj: any): void {

  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState?(isDisabled: boolean): void {

  }
  private toDate(age){

  }
  // private toDate(age: Age): string {
  //   const now = new Date();
  //   switch (age.unit) {
  //     case AgeUnit.Year: {
  //       return convertToDate(subYears(now, age.age));
  //     }
  //     case AgeUnit.Month: {
  //       return convertToDate(subMonths(now, age.age));
  //     }
  //     case AgeUnit.Day: {
  //       return convertToDate(subDays(now, age.age));
  //     }
  //     default: {
  //       return '1991-01-01';
  //     }
  //   }
  //}
}
