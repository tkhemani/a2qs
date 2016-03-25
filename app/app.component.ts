import {Component} from 'angular2/core';
import {test} from './test';
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [test]
})
export class AppComponent { 
   
    }

