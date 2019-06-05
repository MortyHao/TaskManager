import {trigger,state,transition,style,animate} from '@angular/animations';

export const itemAnim=trigger('item',[
    state('mouseOut',style({'border-left-width':'5px'})),
    state('mouseHover',style({'border-left-width':'10px'})),
    transition('mouseOut=>mouseHover',animate('100ms ease-in')),
    transition('mouseHover=>mouseOut',animate('100ms ease-out')),
]);