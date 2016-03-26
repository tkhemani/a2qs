import {Component} from 'angular2/core';
// import {ButtonDemo} from './button/butt


import {MdButton} from '@angular2-material/button';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    // directives: [ButtonDemo]
    directives: [MdButton]
})
export class AppComponent { 
    }

