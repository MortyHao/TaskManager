import {trigger,state,transition,style,animate} from '@angular/animations';

export const cardAnim=trigger('card',[
    state('mouseOut',style({transform:'scale(1)','box-shadow':'none'})),
    state('mouseHover',style({transform:'scale(1.05)','box-shadow':'3px 3px 5px 6px #ccc'})),
    transition('mouseOut=>mouseHover',animate('100ms ease-in')),
    transition('mouseHover=>mouseOut',animate('100ms ease-out')),
]);