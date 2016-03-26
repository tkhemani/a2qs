import {Component} from 'angular2/core';
import {MdButton} from '@angular2-material/button';

@Component({
    selector: 'button-demo',
    templateUrl: 'app/button/button-demo.html',
    // styleUrls: ['demo-app/button/button-demo.css'],
    directives: [MdButton]
})
export class ButtonDemo {
  isDisabled: boolean = false;

}
