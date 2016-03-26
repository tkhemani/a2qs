import {Component} from 'angular2/core';
import {MdButton, MdAnchor} from '@angular2-material/button';

@Component({
    selector: 'button-demo',
    templateUrl: 'demo-app/button/button-demo.html',
    styleUrls: ['demo-app/button/button-demo.css'],
    directives: [MdButton, MdAnchor]
})
export class ButtonDemo {
  isDisabled: boolean = false;

}
