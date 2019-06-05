import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import {trigger,state,transition,style,animate} from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations:[
  //   trigger('square',
  //     [
  //       state('green',style({'background-color':'green'})),
  //       state('red',style({'background-color':'red'})),
  //       transition('green=>red',animate(2000)),
  //       transition('red=>green',animate(2000)),
  //     ]
  //     )
  // ],
})
export class AppComponent {

  // squareState="red";
  darkTheme = false;

  constructor(private oc: OverlayContainer) {

  }
  switchTheme(dark: boolean) {
    this.darkTheme = dark;
    if(dark){
      this.oc.getContainerElement().classList.add('my-app-dark-theme');
    }
    else{
      this.oc.getContainerElement().classList.remove('my-app-dark-theme');
    }
  }

}
