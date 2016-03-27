import {Component} from 'angular2/core';
import {MdButton} from '@angular2-material/button';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [MdButton]
})
export class AppComponent {
     l = "time is money";
    }

