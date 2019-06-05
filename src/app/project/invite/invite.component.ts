import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class InviteComponent implements OnInit {
  items = [
    {
      id:1,
      name:'Morty',
    },
    {
      id:2,
      name:'Riki',
    },
    {
      id:3,
      name:'Hao',
    }
  ];

  constructor() { }

  ngOnInit() {
  }


  displayUser(user: {id:string,name:string}){
    return user ? user.name: '';
  }
  // user: {id:string;name:string} like below
  // export  interface User{
  //   id:string;
  //   name:string;
  // }

  onClick(){
    
  }


}
