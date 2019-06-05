import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private readonly avatarName= 'avatars';
  items:string[]=[];
  numAvatars = 16;
  registerForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.setItems();
    let img=`${this.avatarName}:svg-${Math.floor(Math.random()*16).toFixed(0)}`;
    this.registerForm= this.fb.group({
      email:['',Validators.compose([Validators.required,Validators.email])],
      name:['',Validators.compose([Validators.required])],
      password:[''],
      confirmPassword:[''],
      avatar:[img],
      DOB:[],
    });
    
  }

  setItems() {
    for (let i = 1; i <= this.numAvatars; i++) {
      this.items.push(`avatars:svg-${i}`);
    }
  }

  onSubmit({value,valid},ev:Event){
    ev.preventDefault();
    if(!valid){
      return;
    }
    console.log(value);
  }
}
