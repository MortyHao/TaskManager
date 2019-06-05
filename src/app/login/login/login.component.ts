import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.loginForm =this.fb.group({
      email: ['',Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    })

  }

  onSubmit({value, valid }, event: Event) {
    event.preventDefault();
    console.log(JSON.stringify(value));
    console.log(JSON.stringify(valid));
  }

   //create a custom validate
  //  validate(c:FormControl): {[key:string]:any}{
  //   if(!c.value){
  //     return null;
  //   }
  //   const pattern =/^wang+/;
  //   if(pattern.test(c.value)){
  //     return null;
  //   }
  //   return{
  //     emailNotValid: 'information for not valid'
  //   }
  // }

}
